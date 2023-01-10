import Client from '../database';

export type productType = {
  id?: number;
  name: string;
  price: number;
  category: string;
};

export type ordersType = {
  id: number;
  product_id: number;
  quantity: number;
  user_id: number;
  status: string;
};

export class Product {
  async index(): Promise<productType[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM product';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get products ${err}`);
    }
  }
  async show(id: string): Promise<productType[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM product where product.id = $1';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get product ${err} `);
    }
  }
  async create(p: productType): Promise<productType> {
    try {
      const conn = await Client.connect();
      const sql =
        'INSERT INTO product(name, price, category) VALUES($1, $2, $3) RETURNING *';
      const result = await conn.query(sql, [p.name, p.price, p.category]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get product ${err} `);
    }
  }
  async filterBy(cat: string): Promise<productType[]> {
    try{
      const conn = await Client.connect();
      const sql = 'SELECT * FROM product WHERE category=$1';
      const result = await conn.query(sql, [cat]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get product ${err} `);
    }
  }
}
