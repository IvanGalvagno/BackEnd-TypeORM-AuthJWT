import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Outcome } from "../entity/outcome";


export const getAllOutcomes = async (req: Request, res: Response) => {
    const outcomes = await getRepository(Outcome).find();
    return res.status(200).json(outcomes);
}

export const getOutcome = async (req: Request, res: Response) => {
    const {id} = req.params;
    const outcome = await getRepository(Outcome).findOne(id);
    return res.status(200).json(outcome);
}

export const saveOutcome = async (req:Request, res: Response) => {
    const outcome = await getRepository(Outcome).save(req.body);
    return res.status(200).json(outcome);
}

export const updateOutCome = async (req :Request, res: Response) => {
    const { id } = req.params;
    const outcomeUpdated = {...req.body};
    const outcome = await getRepository(Outcome).update(id, outcomeUpdated);
    if (outcome.affected === 1) {
        const outcomeUpdated = await getRepository(Outcome).findOne(id);
        return res.status(200).json(outcomeUpdated);
    } 
    return res.status(404).json({message: 'sorry, couldnt find the Outcome'});
}