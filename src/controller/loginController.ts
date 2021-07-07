import { getRepository} from "typeorm";
import { User } from "../entity/user";
import { Request, Response } from "express";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

require('dotenv').config();

export const Login = async (req :Request, res: Response) => {
    const {email, password} = req.body;
    const user = await getRepository(User).find({
        where: {
            email
        }
    })

  if (user.length === 1) {
      if (await bcrypt.compareSync(password, user[0].password)) {
          const token = jwt.sign({id: user[0].id}, process.env.SECRET_KEY,{
              expiresIn: '1d'
          })
          const data = {
              id: user[0].id,
              name: user[0].name,
              email: user[0].email,
              token
          }
          return res.status(200).json(data);
      }else{
          return res.status(404).json({message: "user not found!"});
      }
  } else{
    return res.status(404).json({message: "user not found!"});
  }  
}