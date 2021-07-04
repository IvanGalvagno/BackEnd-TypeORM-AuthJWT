import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as cors from 'cors';
import routes from "./routes";


const app = express();
const PORT = 3333;

createConnection();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);


app.listen(PORT, () =>{
    console.log(`Api started at the port: ${PORT}`);
})