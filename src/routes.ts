import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';

import { Product, productType } from './models/product';
import { Users, usersType } from './models/users';
import { createCookieAuth, authenticate } from './middleware/cookieJwtAuth';
import { orders } from './models/orders';

// Creating new instances of classes
const router = Router();
const product = new Product();
const user = new Users();
const order = new orders();

// salt rounds for hashing
const saltRounds = 10;

const SECRET = 'anana';

router.use(cookieParser());

router.get('/', (req, res) => {
  res.send('Store route');
});

// product routes

// get all products
router.get(
  '/product',
  async (
    req: Request,
    res: {
      send: (arg0: productType[] | string) => void;
      status: (arg0: number) => void;
      json: (arg0: unknown) => void;
    }
  ) => {
    try {
      const result = await product.index();
      res.send(result);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

//get a product
router.get(
  '/products/:id',
  async (
    req: { params: { id: string } },
    res: {
      send: (arg0: productType | string) => void;
      status: (arg0: number) => void;
      json: (arg0: unknown) => void;
    }
  ) => {
    try {
      const id = req.params.id;
      const result = await product.show(id);
      res.send(result[0]);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

// create a new product
router.post(
  '/products/add',
  authenticate,
  async (req: Request, res: Response) => {
    try {
      const { name, price, category } = req.body;
      const p: productType = {
        name: name,
        price: parseInt(price),
        category: category,
      };
      const result = await product.create(p);
      res.send(result);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

// user routes

// get all users
router.get(
  '/users',
  authenticate,
  async (req: Request, res: Response) => {
    try {
      const result = await user.index();
      res.send(result);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

//get a user
router.get('/users/:id', authenticate, async (req: Request, res: Response) => {
  const token = req.cookies.token;
  try {
    jwt.verify(token, SECRET);
  } catch (err) {
    res.status(401);
    res.json(err);
    return;
  }

  try {
    const id = req.params.id;
    const result = await user.show(Number(id));
    if (result.length === 0) {
      res.send('User does not exist');
    } else {
      res.send(result[0]);
    }
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

// creating new user
router.post('/users/add', async (req: Request, res: Response) => {
  const { firstName, lastName, password } = req.body;

  // generating a salt for the hashing
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  const u: usersType = {
    firstName: firstName,
    lastName: lastName,
    password: hash,
  };
  const tok = await createCookieAuth(req);
  res.cookie('token', tok, {
    httpOnly: true,
  });
  try {
    const result = await user.create(u);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json('Invalid details provided');
  }
});

// get all orders
router.get('/orders', authenticate, async (req: Request, res: Response) => {
  try {
    const result = await order.index();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json('Invalid details provided');
  }
});

// get order with specific status
router.get(
  '/orders/:state',
  authenticate,
  async (req: Request, res: Response) => {
    const state = req.params.state;
    try {
      const result = await order.showCompleted(state);
      if (result.length === 0 || result === null) {
        res.status(200).json('Nothing to show Here');
      } else {
        res.status(200).json(result);
      }
    } catch (err) {
      res.status(400).json('Invalid details provided');
    }
  }
);

export default router;
