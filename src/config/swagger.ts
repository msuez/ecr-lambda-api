import swaggerJSDoc from 'swagger-jsdoc';

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
                url: 'https://n61l1zg042.execute-api.us-east-1.amazonaws.com/',
                description: 'Servidor de producción',
            },
        ],
    },
    apis: ['./src/routes/**/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
