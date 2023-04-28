import mysql from 'mysql2/promise';

export const pool= mysql.createPool({
    host: 'localhost',
    user: 'sa',
    password: 'Guar123!',
    port: 3306,
    database: 'unicostadb',
})