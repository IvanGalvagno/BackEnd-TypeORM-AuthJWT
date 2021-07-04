import { getRepository } from 'typeorm'
import {Request, Response} from 'express'
import { TypeOfPayment } from '../entity/typeOfPayment'

export const getAll = async (req: Request, res: Response) => {
    const typeOfPayments = await getRepository(TypeOfPayment).find();
    return res.status(200).json(typeOfPayments);
}

export const getTypePayment = async (req: Request, res: Response) => {
    const {id} = req.params;
    const typeOfPayment = await getRepository(TypeOfPayment).findOne(id);
    return res.status(200).json(typeOfPayment);
}

export const save = async (req:Request, res: Response) => {
    const typeOfPayment = await getRepository(TypeOfPayment).save(req.body);
    return res.status(200).json(typeOfPayment);
}
