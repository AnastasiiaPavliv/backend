import {workRouter} from "./works.router";
import {Request,Response,NextFunction} from "express";

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/works", workRouter)

app.use((req:Request, res:Response, next:NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*'); // Дозволяє доступ з будь-якого домену
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
const cors=require("cors");
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors({
    credentials: true,
    origin: '*'
}));
app.use(cors(corsOptions))
// Прослуховування сервера
const port = 7000;
app.listen(port,async () => {
    await  mongoose.connect('mongodb+srv://nastia:nastia@march.vk7wrjx.mongodb.net/scientific_works')
    console.log(`Server is running on port ${port}`);
})