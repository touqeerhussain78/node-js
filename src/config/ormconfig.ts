import { ConnectionOptions } from 'typeorm';

const ormConfig: ConnectionOptions = {
 type: 'mysql',
 host: process.env.DB_HOST || 'localhost',
 port: parseInt(process.env.DB_PORT || '3306'),
 username: process.env.DB_USER || 'root',
 password: process.env.DB_PASS || 'Root@123',
 database: process.env.DB_NAME || 'task',
  synchronize: false,
  logging: false,
  entities: ['src/entities/**/*.ts'],
};

export default ormConfig;
