import { NextFunction, Request, Response } from "express";
import config from "../config";
import jwt from "jsonwebtoken";
const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //get auth header
        const authHeader = req.get("Authorization")
        //check authHeader validate 
        if (authHeader) {
            const bearer = authHeader.split(' ')[0].toLowerCase()
            //get value of token 
            const token = authHeader.split(' ')[1];
            //check if it bearer token on not 
            if (token && bearer === 'bearer') {
                //verfiy token --decode based on tokenSecret
                const decode = jwt.verify(token, config.tokenSecret as unknown as string)
                if (decode) {
                    next();
                }
                else {
                    //failed to authenticate user
                    return res.status(401).json({
                        status: "error",
                        message: "User Retrieved Succesfully"
                    })
                }
            } else {

                // token type not bearer
                return res.status(401).json({
                    status: "error",
                    message: "Login Error :Please login again"
                })
            }
        }
        else {
            //no token provided
            return res.status(401).json({
                status: "error",
                message: "Login Error :Please login again"
            })
        }
    } catch (error) {
        throw new Error(`error happend ${error}`);

    }
};
export default verifyToken