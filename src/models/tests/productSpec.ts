import { Product, productType } from '../product';

const product = new Product();

describe('Product model ', () => {
    it('should be 1 (index)', async () => {
      const result = await product.index();
      expect(result.length).toBe(1);
    });
    it('should be 1 (show)', async()=> {
      const result = await product.show('1');
      expect(result.length).toBe(1)
    })
    it('should be greater than 0 (create)',async () => {
      const p:productType = {
        name: "Ring Lights",
        price: 3242,
        category: "Lights"
      }
      await product.create(p)
      const products = await product.index()
      expect(products.length).toBeGreaterThan(0)
    })
    it('should be 1 (filterBy)',async () => {
      const result = await product.filterBy('Lights') 
      expect(result.length).toBe(1)
    })
});
