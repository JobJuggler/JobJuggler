import express, { Router, Request, Response } from 'express';

import appsController from '../controllers/appsController.ts';

const router: Router = express.Router();

// GET ALL APPLICATIONS FROM DATABASE
router.get(
  '/',
  appsController.getApplications,
  (_req: Request, res: Response) => {
    console.log('get request hit');
    res.status(200).send(res.locals.applications);
  },
);

// CREATE NEW APPLICATION IN DATABASE
router.post('/', () => {
  console.log('post request hit');
});

// DELETE APPLICATION FROM DATABASE
router.delete('/', () => {
  console.log('delete request hit');
});

// UPDATE APPLICATION IN DATABASE
router.put('/', () => {
  console.log('update request hit');
});

export default router;
