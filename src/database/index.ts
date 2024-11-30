import { Sequelize } from 'sequelize';

import PostgresDB from './sequelize';
import { InternalServerError } from '../errors';

class DatabaseService {
    private sequelize: Sequelize = PostgresDB
        .getInstance()
        .getSequelize();

    public async syncDatabase(): Promise<void> {
        try {
            await this.sequelize.sync();
            console.log('Database synchronized without deletion.');
        } catch (error) {
            throw new InternalServerError(`Error while synchronizing database: ${error}`);
        }
    }

    public async resetDatabase(): Promise<void> {
        try {
            await this.sequelize.sync({ force: true });
            console.log('Tables synchronized with recreation.');
        } catch (error) {
            throw new InternalServerError(`Error while resetting database: ${error}`);
        }
    }
}

export default new DatabaseService();
