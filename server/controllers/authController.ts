import { Request, Response, NextFunction } from 'express';
import { pool } from "../models/appsModel"
// import db from '../models/appsModel.ts';

const authController = {

	/**
	 * ************************************
	 *
	 * @module  authenticateUser
	 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Micah Nelson, Elias Toussaint
	 * @description checks to see if a user exists within the DB and passwords match
	 * 
	 * ************************************
	 */
	// authenticateUser: async (
	// 	_req: Request,
	// 	res: Response,
	// 	next: NextFunction
	// ): Promise<void> => {
		
	// 	try {
  //     // Destructure req body
  //     // const { username, password } = _req.body; 
	// 		// const insertQuery = 'SELECT * FROM applications';
	// 		const applications = await pool.query(insertQuery);

	// 		res.locals.applications = applications.rows;

	// 		return next();

	// 	} catch (err) {
	// 		return next({
	// 			log: `error in appsController.getApplications : ${err}`,
	// 			status: 500,
	// 			message: { err: 'An error has occured while collecting your application. Check server logs for more details.'}
	// 		})
	// 	}
	// },

/**
	 * ************************************
	 *
	 * @module  createUser
	 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Micah Nelson, Elias Toussaint
	 * @description creates a new user 
	 * 
	 * ************************************
	 */

// createUser: async (
//   _req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
  
//   try {
//     const {username, password } = _req.body; 
//     const insertQuery = 'SELECT * FROM applications';
//     const applications = await pool.query(insertQuery);

//     res.locals.applications = applications.rows;

//     return next();

//   } catch (err) {
//     return next({
//       log: `error in appsController.getApplications : ${err}`,
//       status: 500,
//       message: { err: 'An error has occured while collecting your application. Check server logs for more details.'}
//     })
//   }
// },


}

export default authController;