import express from 'express';
import routes from './routes';
import 'reflect-metadata';
import { AppDataSource } from './database/data-source';

AppDataSource.initialize()
  .then(() => console.log('Data Source initialized'))
  .catch(error =>
    console.error('Error during Data Source initialization', error),
  );

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('🚀 Server is running at http://localhost:3000');
});
