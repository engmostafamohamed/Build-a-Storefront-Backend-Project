import db from '../database';

export type Order = {
    id?: string;
    quantity: string;
    user_id: string;
    status: string
}

export default class OrderStore {
    async getAll(): Promise<Order[]> {
        try {
            const conn = await db.connect();
            const sql = `SELECT * FROM orders`;
            const result = await conn.query(sql);
            conn.release()
            return result.rows
        } catch (error) {
            throw new Error("unable get all orders:${err}")
        }
    }
    async getOne(id: string): Promise<Order> {
        try {
            const conn = await db.connect();
            const sql = `SELECT * FROM orders WHERE id=($1)`;
            const result = await conn.query(sql, [id]);
            conn.release()
            return result.rows[0]
        } catch (error) {
            throw new Error("unable get all orders:${err}")
        }
    }
    async create(order: Order): Promise<Order> {
        try {
            const conn = await db.connect();
            const sql = `INSERT INTO orders (quantity,users_id,status) VALUES($1,$2,$3) RETURNING *`;
            const result = await conn.query(sql, [order.quantity, order.user_id, order.status]);
            conn.release()
            return result.rows[0]
        } catch (error) {
            throw new Error("Could not create order:${err}")
        }
    }
    async update(order: Order, id: string): Promise<Order> {
        try {
            const conn = await db.connect();
            const sql = `UPDATE orders SET quantity=$1 ,users_id=$2,status=$3 WHERE id=$4 RETURNING *`;
            const result = await conn.query(sql, [order.quantity, order.user_id, order.status, id])
            conn.release();
            return result.rows[0]
        } catch (error) {
            throw new Error(`Couldent update user ${(error as Error).message}`);

        }
    }
    async delete(id: string): Promise<Order> {
        try {
            const conn = await db.connect();
            const sql = `DELETE FROM orders WHERE id=($1)`;
            const result = await conn.query(sql, [id]);
            conn.release()
            return result.rows[0]
        } catch (error) {
            throw new Error("Could not delte order:${err}")
        }
    }
    async addProduct(order_id: string, product_id: string): Promise<Order> {
        try {
            const conn = await db.connect();
            const sql = `INSERT INTO orders_products(orders_id,products_id) VALUES($1,$2)RETURNING *`;
            const result = await conn.query(sql, [order_id, product_id]);
            conn.release()
            return result.rows[0]
        } catch (error) {
            throw new Error("Could not add product to order:${err}")
        }
    }
}
