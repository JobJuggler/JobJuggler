import express, { Router, Request, Response } from 'express';

import appsController from '../controllers/appsController.ts';

const router: Router = express.Router();

router.get(
  '/',
  appsController.getApplications,
  (_req: Request, res: Response) => {
    console.log('get request hit');
    res.status(200).send(res.locals.applications);
  },
);

router.post('/', () => {
  console.log('post request hit');
});

router.delete('/', () => {
  console.log('delete request hit');
});

router.put('/', () => {
  console.log('update request hit');
});

export default router;
