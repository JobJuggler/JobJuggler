/**
 * ************************************
 *
 * @module  authRouter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Micah Nelson, Elias Toussaint
 * @description router for applications
 *
 * ************************************
 */

import express, { Router, Request, Response } from 'express';

// import appsController from '../controllers/authController';

const authRouter: Router = express.Router();

authRouter.post('/', (_req: Request, res: Response) => {
  res.status(200).send(res.locals.applications);
});

export default authRouter;
