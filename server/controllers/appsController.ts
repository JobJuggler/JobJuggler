import { Request, Response, NextFunction } from 'express';
import { pool } from "../models/appsModel.ts"
// import db from '../models/appsModel.ts';

const appsController = {

	getApplications: async (
		_req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> => {

		try {

			const insertQuery = 'SELECT * FROM applications';

			const applications = await pool.query(insertQuery);
			console.log('Returned from getApplications: ', applications);

			res.locals.applications = applications.rows;

			return next();

		} catch (err) {

			return next({
				log: `error in appsController.getApplications : ${err}`,
				status: 500,
				message: { err: 'An error has occured while collecting applications. Check server logs for more details.'}
			})

		}
	},

	createApplication: async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> => {

		try {

			// change this once frontend call is confirmed
			const { jobTitle, company, etc } = req.body;

			// change this once frontend call is confirmed
			const insertQuery = `INSERT INTO applications (jobTitle, company, etc) VALUES ($1, $2, $3) RETURNING *`;

			// change this once frontend call is confirmed
			const insertValues = [jobTitle, company, etc];

			const newApplication = pool.query(insertQuery, insertValues);
			console.log('Returned from createApplication: ', newApplication);

			res.locals.newApplication = newApplication;

			return next();

		} catch (err) {

			return next({
				log: `error in appsController.createApplications : ${err}`,
				status: 500,
				message: { err: 'An error has occured while creating applications. Check server logs for more details.'}
			})

		}
	},

	deleteApplication: async (
		req: Request,
		_res: Response,
		next: NextFunction
	): Promise<void> => {

		try {

			// change this once frontend call is confirmed
			const { _id } = req.body;

			// change this once frontend call is confirmed
			const insertQuery = `DELETE FROM applications WHERE _id = ${_id} RETURNING *`;

			const deletedApplication = pool.query(insertQuery);
			console.log('Returned from deleteApplication: ', deletedApplication);

			return next();

		} catch (err) {

			return next({
				log: `error in appsController.deleteApplications : ${err}`,
				status: 500,
				message: { err: 'An error has occured while deleting this application. Check server logs for more details.'}
			})

		}
	},
};

export default appsController;