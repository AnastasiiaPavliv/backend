import {Response, Request, NextFunction} from 'express';
import {Works} from "./Works.model";
import {workService} from "./work.service";
import {IWork} from "./works.type";
import {workRouter} from "./works.router";

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/works", workRouter)


// Прослуховування сервера
const port = 3000;
app.listen(port,async () => {
    await  mongoose.connect('mongodb+srv://nastia:nastia@march.vk7wrjx.mongodb.net/')
    console.log(`Server is running on port ${port}`);
})