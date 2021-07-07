import { Request, Response } from "express";
import { User } from "../entity/user";
import { getRepository } from "typeorm";
import * as bcrypt from 'bcrypt';

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
    const {name, email, password} = req.body;
    const passwordHash = await bcrypt.hash(password, 7);
    const user = await getRepository(User).save({
        name,
        email,
        password :   passwordHash
    });
    return res.status(200).json(user);
}

export const updateUser = async (req :Request, res : Response) => {
    const {id}  = req.params;
    const userUpdated= {...req.body};
    const user = await getRepository(User).update(id, userUpdated);
    if (user.affected === 1) {
        const userUpdated = await getRepository(User).findOne(id);
        return res.status(200).json(userUpdated);
    }
    return res.status(400).json({message: "Updated Failed !"});
}

export const deleteUser = async (req :Request, res: Response) => {
    const {id} = req.params
    const userDeleted = await getRepository(User).delete(id);
    return res.status(200).json({message: "User Deleted Succcessful"});
}
