import pg from 'pg';

// const { Pool } = require('pg');

import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.VITE_DB_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
