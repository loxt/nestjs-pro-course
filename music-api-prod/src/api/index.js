import express from 'express';
import {songRouter} from "./resouces/song";

export const restRouter = express.Router();

restRouter.use('/songs', songRouter);
