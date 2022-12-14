"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var orders = __importStar(require("../../controller/orders"));
var auth_1 = __importDefault(require("../../middleware/auth"));
var routes = (0, express_1.Router)();
//api/order
routes.route('/')
    .get(auth_1["default"], orders.allOrders)
    .post(auth_1["default"], orders.createOrder);
routes.route("/:id")
    .get(auth_1["default"], orders.oneOrders)
    .patch(auth_1["default"], orders.updateOrders)["delete"](auth_1["default"], orders.deleteOrder);
//add product
routes.route('/:id/products')
    .post(auth_1["default"], orders.addProduct);
exports["default"] = routes;
