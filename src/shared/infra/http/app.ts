import cors from 'cors';
import express, { Request, Response } from 'express';

import 'express-async-errors';
import 'reflect-metadata';
import AppError from '../../errors/AppError';
import createConnection from '../typeorm';
import routes from './routes';

const app = express();

createConnection();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
