import { Request, Response } from "express";
import { User } from "../entity/user";
import { getRepository } from "typeorm";

export const getUsers = async (req:Request, res:Response) => {
    const users = await getRepository(User).find()
    return res.status(200).json(users);
} 

export const getUser = async (req :Request, res:Response) => {
    const {id} = req.params;
    const user = await getRepository(User).findOne(id);
    return res.status(200).json(user);
}

export const saveUser = async (req: Request, res: Response) => {
    const user = await getRepository(User).save(req.body);
    return res.status(200).json(user);
}

export const updateUser = async (req :Request, res : Response) => {
    //Magic
}

export const deletUser = async (req :Request, res: Response) => {
    //magic
}
