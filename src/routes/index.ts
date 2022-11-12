import { Router } from "express";
import userRoute from "./api/users"
import orderRoute from "./api/orders"
const routes = Router();
routes.use('/user', userRoute);
routes.use('/orders', orderRoute);
export default routes;
