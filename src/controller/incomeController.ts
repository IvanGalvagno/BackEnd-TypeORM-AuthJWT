import {getRepository} from 'typeorm'
import { Income } from '../entity/income'
import {Request, Response} from 'express'


export const getAllIncomes = async (req: Request, res: Response) => {
    const incomes = await getRepository(Income).find();
    return res.status(200).json(incomes);
}

export const getIncome = async (req: Request, res: Response) => {
    const {id} = req.params;
    const income = await getRepository(Income).findOne(id);
    return res.status(200).json(income);
}

export const saveIncome = async (req:Request, res: Response) => {
    const income = await getRepository(Income).save(req.body);
    return res.status(200).json(income);
}

export const updateIncome = async (req :Request, res: Response) => {
    const { id } = req.params;
    const incomeUpdated = {...req.body};
    const income = await getRepository(Income).update(id, incomeUpdated);
    if (income.affected === 1) {
        const incomeUpdated = await getRepository(Income).findOne(id);
        return res.status(200).json(incomeUpdated);
    } 
    return res.status(404).json({message: 'sorry, couldnt find the Income'});
}