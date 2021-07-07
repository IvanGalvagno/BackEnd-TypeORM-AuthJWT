import { Request, Response, Router} from 'express'
import { deleteIncome, getAllIncomes, getIncome, saveIncome, updateIncome } from './controller/incomeController';
import { Login } from './controller/loginController';
import { deleteOutcome, getAllOutcomes, getOutcome, saveOutcome, updateOutCome } from './controller/outcomeController';

import {deleteTypeOfPayment, getAllTypeOfPayments, getTypeOfPayment, saveTypeOfPayment, updateTypeOfPayment} from './controller/typeOfPaymentController';
import { deleteUser, getUser, saveUser, updateUser } from './controller/userController';
import { deleteUserRole, getUserRole, getUserRoles, saveUserRole, updateUserRole } from './controller/userRoleController';



const routes = Router();


routes.get('/', (req: Request, res: Response) =>{
   return res.json({message: "Hello World"});
});

//Login route
routes.post('/login', Login);

//typeOfPayments routes
routes.get('/typesPayments', getAllTypeOfPayments);
routes.get('/typesPayments/:id', getTypeOfPayment);
routes.put('/typesPayments/:id', updateTypeOfPayment);
routes.post('/typesPayments', saveTypeOfPayment);
routes.delete('/typesPayments/:id', deleteTypeOfPayment);

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


//User routes
routes.get('/users', getUser);
routes.get('/users/:id', getUser);
routes.put('/users/:id', updateUser);
routes.post('/users', saveUser);
routes.delete('/users/:id', deleteUser);

//UserRole routes
routes.get('/userRole', getUserRoles);
routes.get('/userRole/:id', getUserRole);
routes.put('/userRole/:id', updateUserRole);
routes.post('/userRole', saveUserRole);
routes.delete('/userRole/:id', deleteUserRole);


export default routes