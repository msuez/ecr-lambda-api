import { Router, } from 'express';

import { UsersRoutes } from './users.route';
import { Swagger, } from '../config/swagger';
import { SeedController } from '../controllers/seeds.controller';
import { StatusController, } from '../controllers/status.controller';

export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        
        const seedController = new SeedController();
        const statusController = new StatusController();

        //* Swagger documentation
        router.use('/docs', Swagger.serve, Swagger.setup());

        router.use('/users', UsersRoutes.routes);

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

        /**
         * @swagger
         * /seeds:
         *   post:
         *     deprecated: true
         *     summary: Seed the database
         *     description: Synchronizes the database and inserts test data.
         *     operationId: seedDatabase
         *     tags:
         *       - Seeds
         *     responses:
         *       201:
         *         description: Database seeded successfully
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 message:
         *                   type: string
         *                   description: Status message
         *                   example: Database seeded successfully
         */
        router.post('/seeds', seedController.stakeSeeds);

        return router;
    }

}
