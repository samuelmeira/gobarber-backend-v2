import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'gostack_gobarber_dev',
  synchronize: false,
  logging: true,
  subscribers: [],
  migrations: ['./src/modules/shared/infra/typeorm/migrations/*.ts'],
  entities: [
    './src/modules/appointments/infra/typeorm/entities/*.ts',
    './src/modules/users/infra/typeorm/entities/*.ts',
  ],
});
