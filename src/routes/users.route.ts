import { Router, } from 'express';

import { createUserValidation } from '../dtos/users.dto';
import { UsersController, } from '../controllers/users.controller';
import { validationResultMiddleware } from '../middlewares/validationResult';

export class UsersRoutes {

    static get routes(): Router {

        const router = Router();
        const usersController = new UsersController();

        /**
         * @swagger
         * /users:
         *   post:
         *     summary: Create a new user
         *     description: Creates a new user in the database with the provided name and email.
         *     operationId: createUser
         *     tags:
         *       - Users
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             required:
         *               - name
         *               - email
         *             properties:
         *               name:
         *                 type: string
         *                 description: The name of the user.
         *                 example: Matias
         *               email:
         *                 type: string
         *                 description: The email of the user.
         *                 example: matisuez@gmail.com
         *     responses:
         *       201:
         *         description: User successfully created
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 name:
         *                   type: string
         *                   description: The name of the created user.
         *                   example: Matias
         *                 email:
         *                   type: string
         *                   description: The email of the created user.
         *                   example: matisuez@gmail.com
         *       400:
         *         description: Invalid input
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 statusCode:
         *                   type: integer
         *                   description: The status code of the error.
         *                   example: 400
         *                 message:
         *                   type: string
         *                   description: The error message.
         *                   example: User already exists
         */
        router.post(
            '/',
            createUserValidation,
            validationResultMiddleware,
            usersController.createUser,
        );

        /**
         * @swagger
         * /users:
         *   get:
         *     summary: Retrieve a list of users
         *     description: Returns a list of all users in the database.
         *     operationId: getUsers
         *     tags:
         *       - Users
         *     responses:
         *       200:
         *         description: A list of users
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 type: object
         *                 properties:
         *                   id:
         *                     type: string
         *                     description: The ID of the user.
         *                     example: 123
         *                   name:
         *                     type: string
         *                     description: The name of the user.
         *                     example: Matias
         *                   email:
         *                     type: string
         *                     description: The email of the user.
         *                     example: matisuez@gmail.com
         *       500:
         *         description: Server error
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 statusCode:
         *                   type: integer
         *                   description: The status code of the error.
         *                   example: 500
         *                 message:
         *                   type: string
         *                   description: The error message.
         *                   example: Internal server error
         */
        router.get('/', usersController.getAllUsers);

        return router;
    }

}
