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
        router.use('/docs', Swagger.serve, Swagger.setup());

        /**
         * @swagger
         * /ping:
         *   get:
         *     summary: Verify server status
         *     description: Returns "pong" if server is up and running
         *     operationId: pingStatus
         *     tags:
         *       - Status
         *     responses:
         *       200:
         *         description: Successful response
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
