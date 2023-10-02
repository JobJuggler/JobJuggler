import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.VITE_DB_URI,
});

export const query = (
  text: string,
  params: Array<string | number | boolean>,
  callback: (error: Error, result: unknown) => void
) => pool.query(text, params, callback);

export { pool };