import serverless from 'serverless-http';

import routes from './routes/';
import { Server } from './httpd';

const app: Server = new Server({
    env: 'dev',
    port: 3000,
    routes: routes,
});

const serverlessApp = app.startServerless();

export const handler = serverless(serverlessApp);
export default app;
