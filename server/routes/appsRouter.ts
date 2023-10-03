/**
 * ************************************
 *
 * @module  appsRouter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Micah Nelson, Elias Toussaint
 * @description router for applications
 *
 * ************************************
 */

import express, { Router, Request, Response } from 'express';

import appsController from '../controllers/appsController.ts';

const appsRouter: Router = express.Router();

// GET ALL APPLICATIONS FROM DATABASE
appsRouter.get(
  '/',
  appsController.getApplications,
  (_req: Request, res: Response) => {
    res.status(200).send(res.locals.applications);
  },
);

// CREATE NEW APPLICATION IN DATABASE
appsRouter.post(
  '/',
  appsController.createApplication,
  (_req: Request, res: Response) => {
    res.status(200).send(res.locals.newApplication);
  },
);

// DELETE APPLICATION FROM DATABASE
appsRouter.delete(
  '/',
  appsController.deleteApplication,
  (_req: Request, res: Response) => {
    console.log('delete request hit');
    res.status(200).send('Deleted Application');
  },
);

// UPDATE APPLICATION IN DATABASE
appsRouter.put(
  '/',
  appsController.updateApplication,
  (_req: Request, res: Response) => {
    console.log('update request hit');
    res.status(200).send(res.locals.updatedApplication);
  },
);

export default appsRouter;
