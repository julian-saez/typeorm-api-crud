require('dotenv').config();
import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(cors({
    origin: process.env.URL_DEVELOP
}));

app.listen(process.env.PORT);
console.log('Server is listening on Port', process.env.PORT);


