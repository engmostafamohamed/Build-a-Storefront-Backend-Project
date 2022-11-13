import { Router } from "express";
import verifyAuthToken from "../../middleware/auth"
import * as product from "../../controller/products"
const routes = Router();
//api/user
routes.route('/')
    .get(verifyAuthToken, product.allProducts)
    .post(verifyAuthToken, product.createProduct);
routes.route('/:id')
    .get(verifyAuthToken, product.oneProduct)
    .patch(verifyAuthToken, product.updateProducts)
    .delete(verifyAuthToken, product.deleteProduct)

export default routes