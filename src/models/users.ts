import Client from '../database';

export type usersType = {
  id?: number;
  firstName: string;
  lastName: string;
  password: string;
};

export class Users {
  async index(): Promise<usersType[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get products ${err}`);
    }
  }
  async show(id: number): Promise<usersType[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users WHERE id = ($1)';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get product ${err} `);
    }
  }
  async delete(id: string): Promise<usersType> {
    try {
      const conn = await Client.connect();
      const sql = 'DELETE FROM users WHERE id=($1)';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot delete user ${err}`);
    }
  }
  async create(b: usersType): Promise<usersType> {
    try {
      const conn = await Client.connect();
      const sql =
        'INSERT INTO users(firstName, lastName, password) VALUES($1, $2, $3)';
      const result = await conn.query(sql, [
        b.firstName,
        b.lastName,
        b.password,
      ]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get product ${err} `);
    }
  }
}
