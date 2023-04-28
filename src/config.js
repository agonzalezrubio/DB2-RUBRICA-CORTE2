import {config} from 'dotenv';

config();

export const APP_PORT = process.env.APP_PORT || 3000;
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || 'sa';
export const DB_DATABASE = process.env.DB_DATABASE || 'unicostadb';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'Guar123!';
