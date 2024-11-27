import {
    Router,
    Request,
    Response,
} from 'express';

import {
    Swagger,
} from '../config/swagger';

export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        //* Swagger documentation
        router.use(
            '/docs',
            Swagger.serve,
            Swagger.setup(),
        );

        /**
         * @swagger
         * /api/hello:
         *   get:
         *     summary: Devuelve un saludo
         *     description: Endpoint para probar la API
         *     tags:
         *       - Hello World
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
         *                   example: ¡Hola, mundo!
         */
        router.get('/hello', (req: Request, res: Response) => {
            res.json({
                message: '¡Hola, mundo!',
            });
        });

        /**
         * @swagger
         * /api/ping:
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
        router.get('/ping', (req: Request, res: Response) => {
            res.json({
                message: 'pong',
            });
        });

        return router;
    }

}
