import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';
import 'reflect-metadata';
import cors from 'cors'
import { AppDataSource } from './database/data-source';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

AppDataSource.initialize()
  .then(() => console.log('Data Source initialized'))
  .catch(error =>
    console.error('Error during Data Source initialization', error),
  );

const app = express();
app.use(express.json());
app.use(cors())
app.use(routes);
app.use('/files', express.static(uploadConfig.directory));

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.error(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('🚀 Server is running at http://localhost:3333');
});
