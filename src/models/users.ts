import Client from '../database';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'

dotenv.config();
const pepper = process.env.SECRET_KEY;
const saltRounds = Number(process.env.SALT_ROUNDS); 

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
  async show(id: string): Promise<usersType[]> {
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
  async create(b: usersType): Promise<usersType|null> {  
    try {
      const conn = await Client.connect();
      const sql =
        'INSERT INTO users(firstName, lastName, password) VALUES($1, $2, $3) RETURNING *';
      const hash = bcrypt.hashSync(b.password + pepper, saltRounds)
      const result = await conn.query(sql, [
        b.firstName,
        b.lastName,
        hash,
      ]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get product ${err} `);
    }
  }
  async authenticate(u:usersType): Promise<usersType['password']|null> {
    const conn = await Client.connect()
    const sql = 'SELECT password FROM users WHERE firstName=($1) AND lastName=($2)'

    const result = await conn.query(sql, [u.firstName, u.lastName])

    // console.log(u.password+pepper)

    if(result.rows.length) {

      const user = result.rows[0]

      console.log(user)

      if (bcrypt.compareSync(u.password+pepper, user.password)) {
        return user
      }
    }
    return null
  }
}
