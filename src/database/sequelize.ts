import path from 'path';
import { Sequelize } from 'sequelize-typescript';

import { envs } from '../config/envs';

class PostgresDB {
    private sequelize: Sequelize;
    private static instance: PostgresDB;

    private constructor() {
        this.sequelize = new Sequelize(envs.DB_CONNECTION_STRING, {
            logging: false,
            dialect: 'postgres',
            models: [path.join(__dirname, '/../models')],
        });
    }

    public static getInstance(): PostgresDB {
        if (!PostgresDB.instance) {
            PostgresDB.instance = new PostgresDB();
        }
        return PostgresDB.instance;
    }

    public getSequelize(): Sequelize {
        return this.sequelize;
    }
}

export default PostgresDB;
