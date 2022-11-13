import { Router } from "express";
import userRoute from "./api/users"
import orderRoute from "./api/orders"
import productRoute from "./api/products"
const routes = Router();
routes.use('/user', userRoute);
routes.use('/orders', orderRoute);
routes.use('/products', productRoute);
export default routes;
