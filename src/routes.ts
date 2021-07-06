import { Request, Response, Router} from 'express'

import {getAll, getTypePayment, save, update} from './controller/typeOfPaymentController';



const routes = Router();


routes.get('/', (req: Request, res: Response) =>{
   return res.json({message: "Hello World"});
});

//typeOfPayments routes
routes.get('/typesPayments', getAll);
routes.get('/typesPayments/:id', getTypePayment);
routes.put('/typesPayments/:id', update);
routes.post('/typesPayments', save);


export default routes