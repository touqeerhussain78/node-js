import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
import recipientRoutes from './routes/recipientRoutes';
import swaggerSpec from './swagger/swagger';
import errorHandler from './middlewares/errorHandler';
import ormConfig from './config/ormconfig';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/recipients', recipientRoutes);

app.use(errorHandler);

createConnection(ormConfig).then(() => {
  app.listen(8081, () => {
    console.log('Server is running on port 8081');
  });
}).catch(error => console.log(error));

export default app;
