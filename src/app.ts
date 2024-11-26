import path from 'path';
import cors from 'cors';
import express from 'express';
import favicon from 'serve-favicon';
import serverless from 'serverless-http';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import routes from './routes/';

const app = express();

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);
app.use(favicon(path.join(__dirname, '../public', 'favicon-32x32.png')));

app.use(express.json());

app.use('/static', express.static(path.join(__dirname, '../public'), {
    setHeaders: (res) => {
        res.setHeader('Cache-Control', 'public, max-age=31536000');
    },
}));

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', routes);

export const handler = serverless(app);
export default app;
