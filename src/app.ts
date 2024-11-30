import serverless from 'serverless-http';

import { Server, } from './httpd';
import { AppRoutes, } from './routes';

const app: Server = new Server({
    env: 'dev',
    port: 3000,
    routes: AppRoutes.routes,
});

const serverlessApp = app.startServerless();

export const handler = serverless(serverlessApp);
export default app;
