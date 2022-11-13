import { Router } from "express";
import * as orders from "../../controller/orders"
const routes = Router();
//api/order
routes.route('/')
    .get(orders.allOrders)
    .post(orders.createOrders)
routes.route("/:id")
    .get(orders.oneOrders)
    .patch(orders.updateOrders)
    .delete(orders.deleteOrder)
//add product
routes.route('/:id/products')
    .post(orders.addProduct)
export default routes;