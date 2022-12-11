require('dotenv').config();
import 'reflect-metadata';
import app from './config/server';
import { AppDataSource } from './config/database';

const main = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Database connected successfully!');

        app.listen(process.env.API_PORT);
        console.log('Server is listening on Port', process.env.API_PORT);
    } catch ( err ) {
        console.error( err )
    }
}

main();
