import Client from '../database';

export type orderType = {
  id?: number;
  product_id?: number;
  quantity: number;
  user_id: number;
  status: string;
};

export class orders {
  async index(): Promise<orderType[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM orders';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get orders ${err}`);
    }
  }
  async showCompleted(state: string): Promise<orderType[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM orders WHERE status=$1';
      const result = await conn.query(sql, [state]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not show orders ${err}`);
    }
  }
  async addProduct(quantity:number, orderId:string, productId:string):Promise<orderType> {
    try {
      const sql = 'INSERT INTO order_products(quantity, order_id, product_id) VALUES($1, $2, $3)'
      //@ts-ignore
      const conn = await Client.connect();
      const result = await conn.query(sql, [quantity, orderId, productId])
      const order = result.rows[0]
      conn.release()
      return order
    } catch (err) {
      throw new Error(`Cannot add Product ${productId} to Order ${orderId} ${err}`);
    }
  }

}
