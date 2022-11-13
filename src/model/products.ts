import db from '../database';

export type Product = {
    id?: string;
    name: string;
    price: number;
    category: string
}

export default class ProductStore {
    async index(): Promise<Product[]> {
        try {
            const conn = await db.connect();
            const sql = `SELECT * FROM products`;
            const result = await conn.query(sql);
            conn.release()
            return result.rows
        } catch (error) {
            throw new Error("unable get all products:${err}")
        }
    }
    async show(id: string): Promise<Product> {
        try {
            const conn = await db.connect();
            const sql = `SELECT * FROM products WHERE id=($1)`;
            const result = await conn.query(sql, [id]);
            conn.release()
            return result.rows[0]
        } catch (error) {
            throw new Error("unable get all products:${err}")
        }
    }
    async create(product: Product): Promise<Product> {
        try {
            const conn = await db.connect();
            const sql = `INSERT INTO products (name,price,category) VALUES($1,$2,$3) RETURNING *`;
            const result = await conn.query(sql, [product.name, product.price, product.category]);
            conn.release()
            return result.rows[0]
        } catch (error) {
            throw new Error("Could not create product:${err}")
        }
    }
    async update(product: Product, id: string): Promise<Product> {
        try {
            const conn = await db.connect();
            const sql = `UPDATE  products SET name=$1 ,price=$2,category=$3 WHERE id=$4 RETURNING *`;
            const result = await conn.query(sql, [product.name, product.price, product.category, id])
            conn.release();
            return result.rows[0]
        } catch (error) {
            throw new Error(`Couldent update user ${(error as Error).message}`);

        }
    }
    async delete(id: string): Promise<Product> {
        try {
            const conn = await db.connect();
            const sql = `DELETE FROM products WHERE id=($1)`;
            const result = await conn.query(sql, [id]);
            conn.release()
            return result.rows[0]
        } catch (error) {
            throw new Error("Could not delete product:${err}")
        }
    }
}
