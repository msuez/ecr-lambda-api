import cors from 'cors';
import express, { Router } from 'express';
import { Server as HttpServer } from 'http';


import { Swagger } from '../config/swagger';

interface ServerOptions {
    env: string,
    port: number,
    routes: Router,
}

export class Server {

    private readonly env: string;
    private readonly port: number;
    private readonly routes: Router;
    private serverListener?: HttpServer;

    public readonly app = express();

    constructor({
        env,
        port,
        routes,
    }: ServerOptions) {
        this.env = env;
        this.port = port;
        this.routes = routes;
    }

    private setupServer() {

        this.app.use( cors({
            origin: '*',
            methods: [
                'GET',
                'PUT',
                'POST',
                'DELETE',
                'OPTIONS',
            ],
            allowedHeaders: [
                'Content-Type',
                'Authorization',
            ],
        }));

        this.app.use(express.json());

        //* Swagger documentation
        this.app.use(
            '/api/docs',
            Swagger.serve,
            Swagger.setup(),
        );

        //* Routes
        this.app.use(
            '/api',
            this.routes,
        );

        //* Catch all
        this.app.use('*', (req, res) => {
            res.status(405).send(`Method Not Allowed`);
        });
    }

    public startServerless() {
        this.setupServer();
        return this.app;
    }

    public async start() {
        this.setupServer();
        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`);
        });
    }

    public close() {
        this.serverListener?.close();
    }

}
