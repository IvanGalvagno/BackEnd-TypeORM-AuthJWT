import { Request, Response, Router} from 'express'

import {getAll} from './controller/typeOfPaymentController';



const routes = Router();


routes.get('/', (req: Request, res: Response) =>{
   return res.json({message: "Hello World"});
});

//typeOfPayments routes
routes.get('/typesPayments', getAll);


export default routes