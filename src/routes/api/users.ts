import { Router } from "express";
import verifyAuthToken from "../../middleware/auth"
import * as user from "../../controller/users"
const routes = Router();
//api/user
routes.route('/')
    .get(verifyAuthToken, user.allUser)
    .post(user.createUser);
routes.route('/:id')
    .get(verifyAuthToken, user.oneUser)
    .patch(verifyAuthToken, user.updateUser)
    .delete(verifyAuthToken, user.deleteUser)
routes.post('/login', user.createToken)
export default routes
