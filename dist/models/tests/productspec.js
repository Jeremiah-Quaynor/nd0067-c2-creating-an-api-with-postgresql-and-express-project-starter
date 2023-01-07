'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const product_1 = require('../product');
const product = new product_1.Product();
describe('Product model ', () => {
  describe('Index method suite', () => {
    it('should have an index method', () => {
      expect(product.index()).toBeDefined();
    });
    it('should return a list of products', async () => {
      const re = [
        {
          id: 1,
          name: 'kmulles0',
          price: 95,
          category: 'Hard Tile & Stone',
        },
        {
          id: 2,
          name: 'clightman1',
          price: 89,
          category: 'Granite Surfaces',
        },
        {
          id: 3,
          name: 'zbeckmann2',
          price: 95,
          category: 'Roofing (Metal)',
        },
        {
          id: 4,
          name: 'asalkild3',
          price: 71,
          category: 'Casework',
        },
        {
          id: 5,
          name: 'clodin4',
          price: 8,
          category: 'Drywall & Acoustical (FED)',
        },
        {
          id: 6,
          name: 'bpavlitschek5',
          price: 94,
          category: 'HVAC',
        },
        {
          id: 7,
          name: 'cmaunton6',
          price: 16,
          category: 'Plumbing & Medical Gas',
        },
        {
          id: 8,
          name: 'jpalffy7',
          price: 7,
          category: 'Drywall & Acoustical (MOB)',
        },
        {
          id: 9,
          name: 'espinley8',
          price: 11,
          category: 'Overhead Doors',
        },
        {
          id: 10,
          name: 'kjansson9',
          price: 60,
          category: 'Wall Protection',
        },
        {
          id: 11,
          name: 'Ring Lights',
          price: 983,
          category: 'Lights',
        },
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
      const p = [
        {
          id: 2,
          name: 'clightman1',
          price: 89,
          category: 'Granite Surfaces',
        },
      ];
      expect(result).toEqual(p);
    });
  });
});
