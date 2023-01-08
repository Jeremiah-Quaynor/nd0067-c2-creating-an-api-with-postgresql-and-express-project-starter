import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
const secret = 'anana';

export const createCookieAuth = async (req: Request) => {
  const { firstName, lastName, password } = req.body;
  const payload = {
    firstName: firstName,
    lastName: lastName,
    password: password,
  };
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });

  return token;
};

export const authenticate = (req: Request, res: Response, next: () => void) => {
  const token = req.cookies.token;
  try {
    jwt.verify(token, secret);
  } catch (err) {
    res.status(401);
    res.json(err);
    return;
  }
};
