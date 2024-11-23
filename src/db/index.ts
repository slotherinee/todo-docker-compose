import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: parseInt(process.env.PG_PORT!),
})

const createTodosTableIfNotExists = async () => {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        task VARCHAR(255) NOT NULL,
        completed BOOLEAN DEFAULT false
      );
    `;
  
    try {
      await pool.query(createTableQuery);
      console.log('Todos table is ready (or already exists).');
    } catch (error) {
      console.error('Error creating todos table:', error);
    }
  };
  
createTodosTableIfNotExists();