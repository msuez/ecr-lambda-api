import { Request, Response, NextFunction, Handler } from 'express';

import { User } from '../models/User';
import Database from '../database';

export class SeedController {

    public stakeSeeds: Handler = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            await Database.resetDatabase();
            const users = await User.bulkCreate([
                { name: 'Matias', email: 'matisuez@gmail.com' },
                { name: 'John Doe', email: 'johndoe@example.com' },
                { name: 'Jane Smith', email: 'janesmith@example.com' },
            ]);

            res.status(201).json({
                message: 'Database seeded successfully',
                users,
            });

        } catch (error) {
            next(error);
        }
    };
}
