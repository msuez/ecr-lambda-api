import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
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
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
