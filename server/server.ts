import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const port = process.env.VITE_PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
