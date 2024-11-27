import { 
    Handler,
    Request,
    Response,
    NextFunction,
} from 'express';

export class StatusController {

    public pingStatus: Handler = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {
        try {
            res.json({
                message: 'pong',
            });
        } catch (error) {
            next( error );
        }
    }

}