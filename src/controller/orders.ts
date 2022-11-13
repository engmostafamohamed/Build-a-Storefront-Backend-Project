import { Request, Response } from "express";
import OrderStore from "../model/orders";
const orderStore = new OrderStore();
const allOrders = async (req: Request, res: Response,) => {
    try {
        const allOrders = await orderStore.getAll();
        return res.json({
            status: "success",
            data: allOrders,
            message: "get all orders  Succesfully"
        })
    } catch (error) {
        console.error(error);
    }
}
const createOrder = async (req: Request, res: Response) => {
    try {
        const orders = await orderStore.create(req.body);
        return res.json({
            status: "success",
            data: orders,
            message: "orders created  Succesfully"
        })
    } catch (error) {
        console.error(error);
    }
}
const oneOrders = async (req: Request, res: Response) => {
    try {
        const oneOrder = await orderStore.getOne(req.params.id);
        return res.json({
            status: "success",
            data: oneOrder,
            message: "get one orders  Succesfully"
        })
    } catch (error) {
        console.error(error);
    }
}
const updateOrders = async (req: Request, res: Response) => {
    try {
        const updateOrder = await orderStore.update(req.body, req.params.id);
        return res.json({
            status: "success",
            data: updateOrder,
            message: "Order updated"
        })
    } catch (error) {
        console.error(error);
    }
}
const deleteOrder = async (req: Request, res: Response) => {
    try {
        await orderStore.delete(req.params.id);
        return res.json(
            {
                message: "User deleted Succesfully"
            }
        );
    } catch (error) {
        console.error(error);
    }
}
const addProduct = async (req: Request, res: Response) => {
    try {
        const orderId: string = req.params.id;
        const productId: string = req.body.productId;
        const addedProduct = await orderStore.addProduct(orderId, productId);
        return res.json({
            status: "success",
            data: addedProduct,
            message: "Order created"
        })
    } catch (error) {
        console.error(error);
    }
}
export {
    allOrders,
    createOrder,
    oneOrders,
    updateOrders,
    deleteOrder,
    addProduct
}