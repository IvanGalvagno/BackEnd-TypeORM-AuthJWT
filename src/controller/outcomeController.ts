import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Outcome } from "../entity/outcome";


export const getAll = async (req: Request, res: Response) => {
    const outcomes = await getRepository(Outcome).find();
    return res.status(200).json(outcomes);
}

export const getIncome = async (req: Request, res: Response) => {
    const {id} = req.params;
    const outcome = await getRepository(Outcome).findOne(id);
    return res.status(200).json(outcome);
}

export const save = async (req:Request, res: Response) => {
    const outcome = await getRepository(Outcome).save(req.body);
    return res.status(200).json(outcome);
}

export const update = async (req :Request, res: Response) => {
    const { id } = req.params;
    const outcomeUpdated = {...req.body};
    const outcome = await getRepository(Outcome).update(id, outcomeUpdated);
    if (outcome.affected === 1) {
        const incomeUpdated = await getRepository(Outcome).findOne(id);
        return res.status(200).json(incomeUpdated);
    } 
    return res.status(404).json({message: 'sorry, couldnt find the Outcome'});
}