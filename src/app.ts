import path from 'path';
import YAML from 'yamljs';
import express from 'express';
import serverless from 'serverless-http';
import swaggerUi from 'swagger-ui-express';

import routes from './routes/';

const app = express();
const swaggerDocument = YAML.load(path.resolve(__dirname,'./config/swagger.yaml'));

app.use(express.json());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', routes);

export const handler = serverless(app);
export default app;
