import {
    Router,
} from 'express';

import {
    Swagger,
} from '../config/swagger';

import {
    StatusController,
} from '../controllers/status.controller';

export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        const statusController = new StatusController();

        //* Swagger documentation
        router.use(
            '/docs',
            Swagger.serve,
            Swagger.setup(),
        );

        /**
         * @swagger
         * /ping:
         *   get:
         *     summary: Verifica el estado del servidor
         *     description: Devuelve "pong" si el servidor está funcionando.
         *     tags:
         *       - Status
         *     responses:
         *       200:
         *         description: Respuesta exitosa
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 message:
         *                   type: string
         *                   example: pong
         */
        router.get('/ping', statusController.pingStatus);

        return router;
    }

}
