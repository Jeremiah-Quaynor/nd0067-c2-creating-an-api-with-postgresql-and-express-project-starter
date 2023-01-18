import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'


import { Product, productType } from './models/product';
import { Users, usersType } from './models/users';
import { orders } from './models/orders';
import verifyAuthToken from './middleware/verifyToken';

// Creating new instances of classes
dotenv.config();
const router = Router();
const product = new Product();
const user = new Users();
const order = new orders();
const SECRET_KEY: any = process.env.SECRET_KEY;


router.get('/', (req, res) => {
  console.log(process.env.POSTGRES_DB)
  res.send('Store route');
});


// get all products
router.get(
  '/products',
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const result = await product.index();
      res.send(result);
    } catch (err) {
      res.status(400);
      res.json(err);
      return
    }
  }
);

//get a product
router.get(
  '/products/:id',
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const id = req.params.id;
      const result = await product.show(id);
      res.send(result);
    } catch (err) {
      res.status(400);
      res.json(err);
      return
    }
  }
);

// create a new product
router.post(
  '/products/add',
  verifyAuthToken,
  async (req: Request, res: Response) => {
    const p: productType = {
      name: req.body.name,
      price: parseInt(req.body.price),
      category: req.body.category,
    }
    try {
      const authorizationHeader = req.headers.authorization
      const token:any = authorizationHeader?.split(' ')[1]
      jwt.verify(token , SECRET_KEY)
    } catch (err) {
      res.status(401);
      res.json(`Access denied, Invalid token ${err}`);
      return
    }
    try {
      const result = await product.create(p);
      res.send(result);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

// get products by category
router.get('/products/category/:cat', async(req:Request, res:Response) => {
  try{
    const cat = req.params.cat;
    const result = await product.filterBy(cat);
    res.send(result)
  } catch (err) {
    res.status(400);
    res.json(err);
    return
  }
})


// user routes

// get all users
router.get(
  '/users',
  verifyAuthToken,
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
router.get('/users/:id',verifyAuthToken , async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await user.show(id)
    res.status(200).json(result)
  } catch (err) {
    res.status(401);
    res.json(err);
    return;
  }
});

// creating new user
router.post('/users/add', async (req: Request, res: Response) => {
  const u: usersType = {
    firstName:req.body.firstName, 
    lastName: req.body.lastName,
    password: req.body.password,
  }
  try {
    const result = await user.create(u);
    const token = jwt.sign({user: result}, SECRET_KEY)
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json('Invalid details provided');
    return
  }
});

// get all orders
router.get('/orders',verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const result = await order.index();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json('Invalid details provided');
    return
  }
});

// get order with specific status
router.get('/orders/:state',
  verifyAuthToken,
  async (req: Request, res: Response) => {
    const state = req.params.state;
    try {
      const result = await order.showCompleted(state);
      if (result.length === 0 || result === null) {
        res.status(200).json('Nothing to show Here');
      } else {
        res.status(200).json(result);
        return
      }
    } catch (err) {
      res.status(400).json('Invalid details provided');
      return
    }
  }
);


export default router;