import { Request, Response, NextFunction } from 'express';
import { pool } from "../models/appsModel";
import bcrypt from 'bcrypt';

interface User {
  name: string;
  email: string;
  username: string;
  password: string;
}

interface AuthController {
  createUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

// const getUserByUsername = async (name: string, email: string, username: string, password: string): Promise<User | undefined> => {
//   const queryString = `INSERT INTO users (name, email, username, password) VALUES ($1, $2, $3, $4)`;
//   const value = [name, email, username, password];
//   const { rows } = await pool.query(queryString, value);
// 	console.log('ROWS[0]: ', rows[0])
//   return rows[0];
// };

const authController: AuthController = {
  async createUser(req: Request, res: Response, next: NextFunction) {
    const { name, email, username, password } = req.body as User;

    try {
      if (!username || !password) {
        res.locals.successful = {
          created: false,
          message: 'username and password are required',
        };
        return next();
      }
    } catch (err) {
      return next({ log: 'Error in createUser' });
    }

    // try {
    //   const userData = await getUserByUsername( name, email, username, password );
    //   if (userData) {
    //     res.locals.successful = {
    //       created: false,
    //       message: 'username already exists',
    //     };
    //     return next();
    //   }
    // } catch (err) { console.log(err) }

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		
		const queryString = `
			INSERT INTO users (name, email, username, password)
			VALUES ($1, $2, $3, $4)
			RETURNING id, name, email, username;`;
		
		const values = [name, email, username, hashedPassword];
		
		try {
			const { rows } = await pool.query(queryString, values);
		
			if (rows.length > 0) {
				const user = rows[0];
				res.locals.successful = {
					created: true,
					message: 'User created',
					user,
				};
				return next();
			} else {
				throw new Error('Failed to create user.');
			}
		} catch (err) {
			return next({ log: `Error in createUser: ${err}` });
		}
	}
};

export default authController;
