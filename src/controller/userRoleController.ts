import {getRepository} from 'typeorm'
import { UserRole } from '../entity/userRole';
import { Request, Response } from 'express'

export const getUserRoles = async (req: Request, res: Response) => {
    const userRole = await getRepository(UserRole).find();
    return res.status(200).json(userRole);
}

export const getUserRole = async (req:Request, res: Response) => {
    const {id} = req.params;
    const userRole = await getRepository(UserRole).findOne(id);
    return res.status(200).json(userRole);
}

export const saveUserRole = async (req: Request, res: Response) => {
    const userRole = await getRepository(UserRole).save(req.body);
    return res.status(200).json(userRole);
}

export const updateUserRole = async (req:Request, res: Response) => {
    const {id} = req.params;
    const userRoleUpdated = {...req.body};
    const userRole = await getRepository(UserRole).update(id, userRoleUpdated);
    if (userRole.affected === 1) {
        return res.status(200).json(userRole);
    }
    return res.status(404).json({message: "UserRole didnt find !"});
}

export const deleteUserRole = async (req:Request, res: Response) => {
    const {id} = req.params;
    const userRole = await getRepository(UserRole).delete(id);
    return res.status(200).json({message: "User Role deleted!"});
}