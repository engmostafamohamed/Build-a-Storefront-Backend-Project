import { Request, Response } from "express";
import OrderStore from "../model/orders";
const orderStore = new OrderStore();
export const allOrders = async (_req: Request, res: Response,) => {
    try {
        const orders = await orderStore.index();
        res.json({
            status: "success",
            data: orders,
            message: "orders Retrieved Succesfully"
        })
    } catch (error) {
        console.error(error);
    }
}
export const createOrders = async (req: Request, res: Response,) => {
    try {
        const orders = await orderStore.create(req.body);
        res.json({
            status: "success",
            data: { ...orders },
            message: "Order created Succesfully"
        })
    } catch (error) {
        console.error(error);
    }
}
export const oneOrders = async (req: Request, res: Response,) => {
    try {
        const orders = await orderStore.show(req.params.id);
        res.json({
            status: "success",
            data: orders,
            message: "Order Retrieved Succesfully"
        })
    } catch (error) {
        console.error(error);
    }
}
export const updateOrders = async (req: Request, res: Response,) => {
    try {
        const orders = await orderStore.update(req.body, req.params.id);
        res.json({
            status: "success",
            data: orders,
            message: "Order Retrieved Succesfully"
        })
    } catch (error) {
        console.error(error);
    }
}
export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const user = await orderStore.delete(req.params.id);
        return res.status(200).json(
            {
                message: "User deleted Succesfully"
            }
        );
    } catch (error) {
        console.error(error);
    }
}