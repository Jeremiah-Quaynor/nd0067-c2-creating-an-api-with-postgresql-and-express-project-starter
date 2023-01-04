import Client from "../database";

export type productType = {
    id: Number;
    name: string;
    price: number;
    category: string;
}

export type ordersType = {
    id: Number;
    product_id : Number;
    quantity: Number;
    user_id: Number;
    status: string
}




export class Product {
    async index(): Promise<productType[]> {
        try{
            const conn = await Client.connect();
            const sql = "SELECT * FROM product"
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Cannot get products ${err}`);
        }
    }
    async show(id:string): Promise<productType> {
        try{
            const conn = await Client.connect();
            const sql = "SELECT * FROM product where product.id = $1";
            const result = await conn.query(sql, [id])
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Cannot get product ${err} `)
        }
    }
    async create(name:string, price: number, category: string):Promise<productType> {
        try{
            const conn = await Client.connect();
            const sql = "INSERT INTO product(name, price, category) VALUES($1, $2, $3)";
            const result = await conn.query(sql, [name, price, category])
            conn.release();
            return result.rows;
        }catch (err) {
            throw new Error(`Cannot get product ${err} `)
        }
    }
    

}