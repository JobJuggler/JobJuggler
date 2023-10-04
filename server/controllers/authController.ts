import { Request, Response, NextFunction } from 'express';
import { pool } from "../models/appsModel";
import bcrypt from 'bcrypt';

interface User {
  username: string;
  password: string;
}

interface AuthController {
  createUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

const getUserByUsername = async (username: string): Promise<User | undefined> => {
  const queryString = 'SELECT * FROM users WHERE username = $1';
  const value = [username];
  const { rows } = await pool.query(queryString, value);
  return rows[0];
};

const authController: AuthController = {
  async createUser(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body as User;

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

    try {
      const userData = await getUserByUsername(username);
      if (userData) {
        res.locals.successful = {
          created: false,
          message: 'username already exists',
        };
        return next();
      }
    } catch (err) { console.log(err) }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const queryString = 'INSERT INTO users (username, password) VALUES ($1, $2)';
    const values = [username, hashedPassword];

    try {
      await pool.query(queryString, values);
      res.locals.successful = {
        created: true,
        message: 'user created',
        username,
      };
      return next();
    } catch (err) {
      return next({ log: 'Error in createUser' });
    }
  }
};

export default authController;
