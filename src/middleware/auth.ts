import { Request, Response, NextFunction } from "express";
import * as  jwt from 'jsonwebtoken';

require('dotenv').config();

export const Auth = async (req:Request, res:Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(404).json({message: "Token is required"})

    }
    const [ , token] = authHeader.split(' ');
    try {
        await jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch (error) {
        return res.status(401).json({message: "Token invalid"})
    }
}