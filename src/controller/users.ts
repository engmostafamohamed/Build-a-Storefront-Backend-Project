import { Request, Response } from "express";
import UserStore from "../model/users";
import config from '../config';
import jwt from "jsonwebtoken";
const userstore = new UserStore();
export const allUser = async (req: Request, res: Response) => {
    try {
        const user = await userstore.index();
        return res.status(200).json(
            {
                data: { user },
            }
        );
    } catch (error) {
        console.error(error);
    }
}
export const oneUser = async (req: Request, res: Response) => {
    try {
        const user = await userstore.show(req.params.id);
        return res.status(200).json(
            {
                data: { user },
            }
        );
    } catch (error) {
        console.error(error);
    }
}
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userstore.create(req.body);
        return res.status(200).json(
            {
                data: { ...user },
            }
        );
    } catch (error) {
        console.error(error);
    }
}
export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await userstore.update(req.body);
        return res.status(200).json(
            {
                data: { user },
            }
        );
    } catch (error) {
        console.error(error);
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await userstore.delete(req.params.id);
        return res.status(200).json(
            {
                message: "User deleted Succesfully"
            }
        );
    } catch (error) {
        console.error(error);
    }
}
export const createToken = async (req: Request, res: Response) => {
    try {
        const { firstName, passwords } = req.body;
        // console.log(req.body);

        const auth = await userstore.createToken(firstName, passwords);
        const token = jwt.sign({ auth }, config.tokenSecret as unknown as string)
        if (!auth) {
            return res.status(401).json({
                status: 'error',
                message: "the username and password not match please try again"
            })
        }
        return res.json({
            status: 'success',
            data: { ...auth, token },
            message: "user authenticated succefully"
        })
    } catch (error) {
        console.error(error);
    }
}