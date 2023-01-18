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
}
