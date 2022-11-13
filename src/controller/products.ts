import { Request, Response } from "express";
import ProductStore from "../model/products";
const productStore = new ProductStore();
const allProducts = async (req: Request, res: Response,) => {
    try {
        const allProducts = await productStore.all();
        return res.json({
            status: "success",
            data: allProducts,
            message: "get all products "
        })
    } catch (error) {
        console.error(error);
    }
}
const createProduct = async (req: Request, res: Response,) => {
    try {
        const product = await productStore.create(req.body);
        return res.json({
            status: "success",
            data: product,
            message: "Product created"
        })
    } catch (error) {
        console.error(error);
    }
}
const oneProduct = async (req: Request, res: Response,) => {
    try {
        const oneProduct = await productStore.one(req.params.id);
        return res.json({
            status: "success",
            data: oneProduct,
            message: "get One Product"
        })
    } catch (error) {
        console.error(error);
    }
}
const updateProducts = async (req: Request, res: Response,) => {
    try {
        const updateproduct = await productStore.update(req.body, req.params.id);
        return res.json({
            status: "success",
            data: updateproduct,
            message: "Product updated"
        })
    } catch (error) {
        console.error(error);
    }
}
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const product = await productStore.delete(req.params.id);
        return res.status(200).json(
            {
                message: "Product deleted"
            }
        );
    } catch (error) {
        console.error(error);
    }
}
export {
    allProducts,
    createProduct,
    oneProduct,
    updateProducts,
    deleteProduct
}