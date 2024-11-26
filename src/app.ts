import express, { Request, Response } from 'express';
import serverless from 'serverless-http';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import routes from './routes/';

const app = express();

app.use(express.json());


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', routes);

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).json({ message: 'pong' });
});

export const handler = serverless(app);
