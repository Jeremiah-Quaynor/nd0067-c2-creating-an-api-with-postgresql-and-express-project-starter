import { orders } from '../orders';

describe('orders class', () => {
  let order: orders;
  beforeEach(() => {
    order = new orders();
  });

  describe('index method', () => {
    it('should return an array of all orders', async () => {
      const result = await order.index();
      expect(result).toBeDefined();
      expect(result instanceof Array).toBeTruthy();
    });
  });

  describe('showCompleted method', () => {
    it('should return an array with all completed orders', async () => {
      const result = await order.showCompleted("completed");
      expect(result).toBeDefined();
      expect(result instanceof Array).toBeTruthy();
    });
  });

});
