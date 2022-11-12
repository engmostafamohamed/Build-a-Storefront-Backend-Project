import db from '../database';
import config from "../config";
import bcrypt from 'bcrypt';

const hashPassword = (password: string) => {
    const salt = parseInt(config.salt as string, 10);
    return bcrypt.hashSync(`${password}${config.papper}`, salt)
}
export type User = {
    id?: string;
    firstName: string;
    lastName: string;
    password: string;
}
export default class UserStore {
    async index(): Promise<User[]> {
        try {
            const conn = await db.connect();
            const sql = `SELECT firstName,lastName FROM users`;
            const data = await conn.query(sql);
            conn.release();
            return data.rows;
        } catch (error) {
            throw new Error(`Could not get users${(error as Error).message}`);
        }
    }
    async show(id: string): Promise<User> {
        try {
            const conn = await db.connect();
            const sql = `SELECT firstName,lastName FROM users WHERE id=$1`;
            const data = await conn.query(sql, [id]);
            conn.release();
            return data.rows[0];
        } catch (error) {
            throw new Error(`Could not show user ${(error as Error).message}`)
        }
    }
    async create(user: User): Promise<User> {
        try {
            const conn = await db.connect();
            const sql = `INSERT INTO users(firstName,lastName,password)VALUES($1,$2,$3)RETURNING *`;
            const data = await conn.query(sql, [user.firstName, user.lastName, hashPassword(user.password)]);
            conn.release();
            return data.rows[0];
        } catch (error) {
            throw new Error(`Couldent create user ${(error as Error).message}`);
        }
    }
    async update(user: User): Promise<User> {
        try {
            const conn = await db.connect();
            const sql = `UPDATE users SET firstName=$1,lastName=$2,password=$3 WHERE id=$4 RETURNING firstName,lastName`;
            const data = await conn.query(sql, [user.firstName, user.lastName, hashPassword(user.password), user.id]);
            conn.release();
            return data.rows[0];
        } catch (error) {
            throw new Error(`Couldent update user ${(error as Error).message}`);
        }
    }
    async delete(id: string): Promise<User> {
        try {
            const conn = await db.connect();
            const sql = `DELETE FROM users WHERE id=$1`;
            const data = await conn.query(sql, [id]);
            conn.release();
            return data.rows[0];
        } catch (error) {
            throw new Error(`Couldent update user ${(error as Error).message}`);
        }
    }
    async createToken(firstName: string, passwords: string): Promise<User | null> {
        try {
            const conn = await db.connect();
            const sql = `SELECT password FROM users WHERE firstName=$1`;
            const result = await conn.query(sql, [firstName]);

            if (result.rows.length) {
                const { password: hashPassword } = result.rows[0];
                const isValidPassword = bcrypt.compareSync(`${passwords}${config.papper}`, hashPassword)
                console.log(isValidPassword);
                if (isValidPassword) {
                    const userInfo = await conn.query(`SELECT firstName,lastName FROM users WHERE firstName=$1`, [firstName])
                    return userInfo.rows[0];
                }
            }
            conn.release();
            return null;
        } catch (error) {
            throw new Error(`Unable to login: ${(error as Error).message}`);
        }
    }
}