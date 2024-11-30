import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validationResultMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            success: false,
            errors: errors.array(),
        });
        return;
    }
    next();
};