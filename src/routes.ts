import { Request, Response, Router} from 'express'
import { deleteIncome, getAllIncomes, getIncome, saveIncome, updateIncome } from './controller/incomeController';
import { deleteOutcome, getAllOutcomes, getOutcome, saveOutcome, updateOutCome } from './controller/outcomeController';

import {getAllTypeOfPayments, getTypeOfPayment, saveTypeOfPayment, updateTypeOfPayment} from './controller/typeOfPaymentController';



const routes = Router();


routes.get('/', (req: Request, res: Response) =>{
   return res.json({message: "Hello World"});
});

//typeOfPayments routes
routes.get('/typesPayments', getAllTypeOfPayments);
routes.get('/typesPayments/:id', getTypeOfPayment);
routes.put('/typesPayments/:id', updateTypeOfPayment);
routes.post('/typesPayments', saveTypeOfPayment);

//Outcomes routes
routes.get('/outcomes', getAllOutcomes);
routes.get('/outcomes/:id', getOutcome);
routes.put('/outcomes/:id', updateOutCome);
routes.post('/outcomes', saveOutcome);
routes.delete('/outcomes/:id', deleteOutcome);


//Income routes
routes.get('/incomes', getAllIncomes);
routes.get('/incomes/:id', getIncome);
routes.put('/incomes/:id', updateIncome);
routes.post('/incomes', saveIncome);
routes.delete('/incomes/:id', deleteIncome);


export default routes