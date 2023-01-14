import { Product, productType } from '../product';

const product = new Product();

describe('Product model ', () => {
    it('should return empty array', async () => {
      const result = await product.index();
      expect(result).toEqual([]);
    });
    it('it should return empty array', async()=> {
      const result = await product.show('1');
      expect(result).toEqual([])
    })
    it('should be greater than 0',async () => {
      const p:productType = {
        name: "Ring Lights",
        price: 3242,
        category: "Lights"
      }
      await product.create(p)
      const products = await product.index()
      expect(products.length).toBeGreaterThan(0)
    })
    it('should be greater than 0',async () => {
      const result = await product.filterBy('Lights') 
      expect(result.length).toBe(0)
    })
});
