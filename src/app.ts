import {Response, Request, NextFunction} from 'express';
import {Works} from "./Works.model";
import {workService} from "./work.service";
import {IWork} from "./works.type";

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Оголошення маршрутів та обробника запитів
app.get('/works', async (req:Request, res:Response,  next: NextFunction):Promise<Response<IWork[]>> => {
    try {
        const works = await workService.getAll();

        console.log(works)
        return res.json(works);
    } catch (e) {
        res.status(400).json(e.message)
    }
});

// Прослуховування сервера
const port = 3000;
app.listen(port,async () => {
    await  mongoose.connect('mongodb+srv://nastia:nastia@march.vk7wrjx.mongodb.net/')
    console.log(`Server is running on port ${port}`);
})