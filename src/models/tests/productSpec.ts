import { Product, productType } from '../product';

const product = new Product();

describe('Product model ', () => {
  describe('Index method suite', () => {
    it('should have an index method', () => {
      expect(product.index()).toBeDefined();
    });

    it('should return a list of products', async () => {

      const result = await product.index();
      expect(result).toEqual([]);
    });
  });

  describe('Show method suite', () => {
    it('should have an show method', () => {
      expect(product.show('1')).toBeDefined();
    });

    it('should return a empty array of products', async () => {
      const result = await product.show('1');

      expect(result).toEqual([]);
    });
  });

  describe('Create method suite', ()=> {
    it('should have a Create method',async()=> {
      const p:productType = {
        id: 1,
        name: "ps5",
        price: 9834,
        category: "console"
        }
      expect(product.create(p)).toBeDefined();
    })
  })
});
