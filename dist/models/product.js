'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Product = void 0;
const database_1 = __importDefault(require('../database'));
class Product {
  async index() {
    try {
      const conn = await database_1.default.connect();
      const sql = 'SELECT * FROM product';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get products ${err}`);
    }
  }
  async show(id) {
    try {
      const conn = await database_1.default.connect();
      const sql = 'SELECT * FROM product where product.id = $1';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get product ${err} `);
    }
  }
  async create(p) {
    try {
      const conn = await database_1.default.connect();
      const sql =
        'INSERT INTO product(name, price, category) VALUES($1, $2, $3)';
      const result = await conn.query(sql, [p.name, p.price, p.category]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get product ${err} `);
    }
  }
}
exports.Product = Product;
