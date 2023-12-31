import { Request, Response, NextFunction } from 'express';
import { pool } from '../models/appsModel';
import bcrypt from 'bcrypt';

interface SignUpUser {
  name: string;
  email: string;
  username: string;
  password: string;
}

interface SignInUser {
  username: string;
  password: string;
}

interface AuthController {
  createUser: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  verifyUser: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  createCookie: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

const authController: AuthController = {
  async createUser(req: Request, res: Response, next: NextFunction) {
    const { name, email, username, password } = req.body as SignUpUser;

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
  },

  // USER LOGIN FUNCTION //

  async verifyUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { username, password } = req.body as SignInUser;
      // retriving hashed password
      // const salt = await bcrypt.genSalt(10);
      // const hashedPassword = await bcrypt.hash(password, salt);

      const queryString = `SELECT id, password FROM users WHERE username = $1`;
      const queryValues = [username];
      const response = await pool.query(queryString, queryValues);

      res.locals.userID = response.rows[0].id;
      const storedHashedPassword = response.rows[0].password;

      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (result) {
          return next();
        } else {
          console.log(err);
          return next({
            log: 'bcrypt compare error',
            status: 400,
            message: { err: 'an error has occured while comparing passwords.' },
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  // USER LOGIN FUNCTION //

  async createCookie(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const userID = res.locals.userID;

      res.cookie('user_id', userID, { httpOnly: true, maxAge: 3000000 });

      return next();
    } catch (err) {
      console.log(err);
      return next({ log: 'bcrypt compare error' });
    }
  },
};

export default authController;
