
import { 
    Handler,
    Request,
    Response,
    NextFunction,
} from 'express';

import { User } from '../models/User';
import { BadRequestError } from '../errors';

export class UsersController {

    public createUser: Handler = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {
        try {

            const { name, email, } = req.body;
            
            const user = await User.findOne({
                where: { email, },
            });

            if (user) {
                throw new BadRequestError('User already exists');
            }

            const createdUser = await User.create({
                name, email,
            });

            res.status(201).json({
                name: createdUser.name,
                email: createdUser.email,
            });

        } catch (error) {
            next( error );
        }
    }

    public getAllUsers: Handler = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    };

}
