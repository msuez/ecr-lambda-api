import { Router } from 'express';

const router = Router();

router.get('/hello', (req, res) => {
    res.json({ message: '¡Hola, mundo!' });
});

router.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

export default router;
