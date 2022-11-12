import { Router } from "express";
import userRoute from "./api/users"
const routes = Router();
routes.use('/user', userRoute);
export default routes;
