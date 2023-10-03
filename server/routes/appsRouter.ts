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
    console.log('get request hit');
    res.status(200).send(res.locals.applications);
  },
);

// CREATE NEW APPLICATION IN DATABASE
appsRouter.post(
  '/', 
  appsController.createApplication,
  (_req: Request, res: Response) => {
    console.log('post request hit');
    res.status(200).send(res.locals.newApplication);
  },
);

// DELETE APPLICATION FROM DATABASE
appsRouter.delete('/', () => {
  console.log('delete request hit');
});

// UPDATE APPLICATION IN DATABASE
appsRouter.put('/', () => {
  console.log('update request hit');
});

export default appsRouter;
