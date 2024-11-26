import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Devuelve un saludo
 *     description: Endpoint para probar la API
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
router.get('/hello', (req, res) => {
    res.json({ message: '¡Hola, mundo!' });
});

/**
 * @swagger
 * /api/ping:
 *   get:
 *     summary: Verifica el estado del servidor
 *     description: Devuelve "pong" si el servidor está funcionando.
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
router.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

export default router;
