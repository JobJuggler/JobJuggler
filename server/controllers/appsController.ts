import { Request, Response, NextFunction } from 'express';
import { pool } from "../models/appsModel"
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
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> => {
		
		try {
			const { user_id } = req.cookies;

			const insertQuery = `SELECT * FROM applications WHERE applications.user_id = $1`;
			const applications = await pool.query(insertQuery, [user_id]);

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

			const { user_id } = req.cookies;

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
				notes,
			} = req.body;

			const insertQuery = `
				INSERT INTO "applications" 
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
						notes,
						user_id
					) 
				VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *`;

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
				notes,
				user_id
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

			const idToDelete = req.body.id;
			console.log('idToDelete: ', idToDelete)
			const insertQuery = `DELETE FROM applications WHERE id = $1 RETURNING *`;

			const deletedApplication = await pool.query(insertQuery, [idToDelete]);
			// console.log('Returned from deleteApplication: ', deletedApplication);

			if (deletedApplication.rows.length === 0) {
				return next({
					log: 'error occured while trying to delete an application - application may not exist',
					status: 304, // not modified
					message: { err: 'The requested application to delete could not be found'}
				})
			}
			return next();

		} catch (err) {
			return next({
				log: `error in appsController.deleteApplications : ${err}`,
				status: 500,
				message: { err: 'An error has occured while deleting this application. Check server logs for more details.'}
			})
		}
	},

	/**
	 * ************************************
	 *
	 * @module  updateApplication
	 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Micah Nelson, Elias Toussaint
	 * @description updates an application in the database
	 * 
	 * ************************************
	 */
	updateApplication: async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> => {

		try {

			const idToUpdate = req.body.id;
			const properties = req.body.properties;

			console.log('idToUpdate: ', idToUpdate)
			const insertQuery = `
				UPDATE applications
				SET(
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
				) = (
					$2, 
					$3, 
					$4, 
					$5, 
					$6, 
					$7, 
					$8, 
					$9, 
					$10, 
					$11, 
					$12, 
					$13, 
					$14, 
					$15, 
					$16,
					$17
				)
				WHERE id = $1 
				RETURNING *
			`;

			const updateApplication = await pool.query(insertQuery, [idToUpdate, ...properties]);
			// console.log('Returned from updateApplication: ', updateApplication);

			if (updateApplication.rows.length === 0) {
				return next({
					log: 'error occured while trying to update an application - application may not exist',
					status: 304, // not modified
					message: { err: 'The requested application to update could not be found'}
				})
			}

			res.locals.updatedApplication = updateApplication;

			return next();

		} catch (err) {
			return next({
				log: `error in appsController.updateApplication : ${err}`,
				status: 500,
				message: { err: 'An error has occured while updating this application. Check server logs for more details.'}
			})
		}
	},
};

export default appsController;