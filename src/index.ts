import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as cors from 'cors';
import routes from "./routes";

require('dotenv').config();


const app = express();

createConnection();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT, () =>{
    console.log(`Api started at the port: ${process.env.PORT}`);
})