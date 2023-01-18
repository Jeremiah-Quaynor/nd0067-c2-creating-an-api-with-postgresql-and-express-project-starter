import {Product} from '../product';

describe('Product class', () => {
  let product: Product;
  beforeEach(() => {
    product = new Product();
  });

  describe('index method', () => {
    it('should return an array of all products', async () => {
      const result = await product.index();
      expect(result).toBeDefined();
      expect(result instanceof Array).toBeTruthy();
    });
  });

  describe('show method', () => {
    it('should return an array with a single product object when a valid id is passed', async () => {
      const newProduct = {
        name: 'Apple',
        price: 1000,
        category: 'fruit'
      }
      await product.create(newProduct);
      const result = await product.show('1');
      expect(result).toBeDefined();
      expect(result instanceof Array).toBeTruthy();
      expect(result.length).toEqual(1);
    });
  });

  describe('create method', () => {
    it('should create a new product and return the created product object', async () => {
      const newProduct = {
        name: 'Apple',
        price: 1000,
        category: 'fruit'
      }
      const result = await product.create(newProduct);
      expect(result).toBeDefined();
    });
  })})