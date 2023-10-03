import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import appsRouter from './routes/appsRouter';
import authRouter from './routes/authRouter';

dotenv.config();

const app = express();
const port = process.env.VITE_PORT;

app.use(express.json());

// ROUTING
app.use('/api/apps', appsRouter);
app.use('/api/auth', authRouter);

// 404 HANDLER
app.use((_req: Request, res: Response) => res.status(404).send('This is not the page you\'re looking for...'));

// GLOBAL HANDLER
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// SERVER INITIALIZATION
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
