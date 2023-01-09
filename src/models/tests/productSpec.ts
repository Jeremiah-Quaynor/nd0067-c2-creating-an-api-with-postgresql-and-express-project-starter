import { Product, productType } from '../product';

const product = new Product();

describe('Product model ', () => {
  describe('Index method suite', () => {
    it('should have an index method', () => {
      expect(product.index()).toBeDefined();
    });

    it('should return a list of products', async () => {
      const re = [
        {
        id: 1,
        name: "Ring Lights",
        price: 9834,
        category: "Lights"
        },
        {
        id: 2,
        name: "Street Lights",
        price: 3423,
        category: "Lights"
        },
        {
        id: 3,
        name: "Percy Jackson",
        price: 324,
        category: "Books"
        },
        {
        id: 4,
        name: "Mac book pro",
        price: 32432,
        category: "laptop"
        }
        ];
      const result = await product.index();
      expect(result).toEqual(re);
    });
  });

  describe('Show method suite', () => {
    it('should have an show method', () => {
      expect(product.show('2')).toBeDefined();
    });

    it('should return a list of products', async () => {
      const result = await product.show('2');
      const p: productType[] = [
        {
          id: 2,
          name: "Street Lights",
          price: 3423,
          category: "Lights"
          },
      ];
      expect(result).toEqual(p);
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
