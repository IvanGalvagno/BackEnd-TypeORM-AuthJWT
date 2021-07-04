import { getRepository } from 'typeorm'
import {Request, Response} from 'express'
import { TypeOfPayment } from '../entity/typeOfPayment'

export const getAll = async (req: Request, res: Response) => {
    const typeOfPayments = await getRepository(TypeOfPayment).find();
    return res.status(200).json(typeOfPayments);
}
