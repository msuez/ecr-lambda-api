import express from 'express';
import serverless from 'serverless-http';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import routes from './routes/';

const app = express();

app.use(express.json());

// Ruta para la documentación de Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas de la API
app.use('/api', routes);

export const handler = serverless(app);
export default app;
