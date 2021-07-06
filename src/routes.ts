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

//Outcomes routes
routes.get('/outcomes', getAll);
routes.get('/outcomes/:id', getOutcome);
routes.put('/outcomes/:id', update);
routes.post('/outcomes', save);


//Income routes
routes.get('/incomes', getAll);
routes.get('/incomes/:id', getIncome);
routes.put('/incomes/:id', update);
routes.post('/incomes', save);


export default routes