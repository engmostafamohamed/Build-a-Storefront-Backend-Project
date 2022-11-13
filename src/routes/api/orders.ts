import { Router } from "express";
import * as orders from "../../controller/orders"
import verifyAuthToken from "../../middleware/auth"
const routes = Router();
//api/order
routes.route('/')
    .get(verifyAuthToken, orders.allOrders)
    .post(verifyAuthToken, orders.createOrders)
routes.route("/:id")
    .get(verifyAuthToken, orders.oneOrders)
    .patch(verifyAuthToken, orders.updateOrders)
    .delete(verifyAuthToken, orders.deleteOrder)
//add product
routes.route('/:id/products')
    .post(verifyAuthToken, orders.addProduct)
export default routes;