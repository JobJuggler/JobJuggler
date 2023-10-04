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

import authController from '../controllers/authController';

const authRouter: Router = express.Router();

authRouter.post(
  '/',
  authController.createUser,
  (_req: Request, res: Response) => {
    return res.status(200).send(res.locals.successful);
  },
);

export default authRouter;
