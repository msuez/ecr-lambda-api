import { RequestHandler } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi, { SwaggerOptions } from 'swagger-ui-express';

export class Swagger {

    static setup(): RequestHandler {
        const swaggerOptions: SwaggerOptions = {
            definition: {
                openapi: '3.0.0',
                info: {
                    title: 'API REST Serverless',
                    version: '1.0.0',
                    description: 'Documentación generada con JSDoc y Swagger',
                },
                servers: [
                    {
                        url: 'http://localhost:3000',
                        description: 'Servidor local',
                    },
                    {
                        url: 'https://{stage}.execute-api.{region}.amazonaws.com',
                        description: 'Servidor de producción',
                    },
                ],
            },
            apis: ['**/*.ts', './routes/**/*.js'],
        }
        return swaggerUi.setup(swaggerJSDoc(swaggerOptions));
    }

    static get serve() {
        return swaggerUi.serve;
    }

}
