import { Request, Response } from "express";
import ProductStore from "../model/products";
const productStore = new ProductStore();
export const allProducts = async (_req: Request, res: Response,) => {
    try {
        const products = await productStore.index();
        res.json({
            status: "success",
            data: products,
            message: "products Retrieved Succesfully"
        })
    } catch (error) {
        console.error(error);
    }
}
export const createProduct = async (req: Request, res: Response,) => {
    try {
        const Product = await productStore.create(req.body);
        res.json({
            status: "success",
            data: { ...Product },
            message: "Product created Succesfully"
        })
    } catch (error) {
        console.error(error);
    }
}
export const oneProduct = async (req: Request, res: Response,) => {
    try {
        const products = await productStore.show(req.params.id);
        res.json({
            status: "success",
            data: products,
            message: "Product Retrieved Succesfully"
        })
    } catch (error) {
        console.error(error);
    }
}
export const updateProducts = async (req: Request, res: Response,) => {
    try {
        const products = await productStore.update(req.body, req.params.id);
        res.json({
            status: "success",
            data: products,
            message: "Product Retrieved Succesfully"
        })
    } catch (error) {
        console.error(error);
    }
}
export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const product = await productStore.delete(req.params.id);
        return res.status(200).json(
            {
                message: "Product deleted Succesfully"
            }
        );
    } catch (error) {
        console.error(error);
    }
}