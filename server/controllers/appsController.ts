import { Request, Response, NextFunction } from 'express';
import { pool } from "../models/appsModel.ts"
// import db from '../models/appsModel.ts';

const appsController = {

	/**
	 * ************************************
	 *
	 * @module  getApplications
	 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Micah Nelson, Elias Toussaint
	 * @description gets all applications from database - data returned on res.locals.applications
	 * 
	 * ************************************
	 */
	getApplications: async (
		_req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> => {

		try {

			const insertQuery = 'SELECT * FROM applications';
			const applications = await pool.query(insertQuery);

			res.locals.applications = applications.rows;

			return next();

		} catch (err) {
			return next({
				log: `error in appsController.getApplications : ${err}`,
				status: 500,
				message: { err: 'An error has occured while collecting your application. Check server logs for more details.'}
			})
		}
	},

	/**
	 * ************************************
	 *
	 * @module  createApplications
	 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Micah Nelson, Elias Toussaint
	 * @description creates an application in the database - data returned on res.locals.newApplication
	 * 
	 * ************************************
	 */
	createApplication: async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> => {

		try {

			const { 
				company,
				companyURL,
				companyContact,
				jobTitle,
				jobLocation,
				jobDescription,
				jobStatus,
				interviewQuestions,
				applicationStatus,
				jobURL,
				schedule,
				remote,
				dateApplied,
				interviewDate,
				salary,
				notes
			} = req.body;

			const insertQuery = `
				INSERT INTO applications 
					(
						company,
						companyURL,
						companyContact,
						jobTitle,
						jobLocation,
						jobDescription,
						jobStatus,
						interviewQuestions,
						applicationStatus,
						jobURL,
						schedule,
						remote,
						dateApplied,
						interviewDate,
						salary,
						notes
					) 
				VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *`;

			const insertValues = [
				company,
				companyURL,
				companyContact,
				jobTitle,
				jobLocation,
				jobDescription,
				jobStatus,
				interviewQuestions,
				applicationStatus,
				jobURL,
				schedule,
				remote,
				dateApplied,
				interviewDate,
				salary,
				notes
			];

			const newApplication = await pool.query(insertQuery, insertValues);

			res.locals.newApplication = newApplication.rows;

			return next();

		} catch (err) {
			return next({
				log: `error in appsController.createApplications : ${err}`,
				status: 500,
				message: { err: 'An error has occured while creating applications. Check server logs for more details.'}
			})
		}
	},

	/**
	 * ************************************
	 *
	 * @module  deleteApplication
	 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Micah Nelson, Elias Toussaint
	 * @description deletes an application from the database - nothing returned
	 * 
	 * ************************************
	 */
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