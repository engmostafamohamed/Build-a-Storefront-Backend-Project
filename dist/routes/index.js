"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var users_1 = __importDefault(require("./api/users"));
var routes = (0, express_1.Router)();
routes.use('/user', users_1["default"]);
exports["default"] = routes;
