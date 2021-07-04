import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import * as cors from 'cors';
import routes from "./routes";
import * as dotenv from 'dotenv';

const app = express();
const PORT = 3333;
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);


app.listen(PORT, () =>{
    console.log(`Api started at the port: ${PORT}`);
})