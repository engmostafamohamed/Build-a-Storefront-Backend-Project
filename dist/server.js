"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var config_1 = __importDefault(require("./config"));
// import db from "./database"
var PORT = config_1["default"].port || 3000;
var app = (0, express_1["default"])();
// console.log(config);
// http login middleware
app.use((0, morgan_1["default"])('common'));
//http security middleware
app.use((0, helmet_1["default"])());
// middleware to parse request
app.use(express_1["default"].json());
// start express server
app.listen(PORT, function () {
    console.log("Server is starting at :".concat(PORT));
});
//test database
// db.connect().then((client) => {
//     return client.query("SELECT now()").then((res) => {
//         client.release();
//         console.log(res.rows)
//     }).catch((error) => {
//         client.release();
//         console.log(error.stack);
//     })
// })
// add routing for / path
app.get("/", function (req, res) {
    console.log(req.body);
    res.send("this is the ____ route");
});
exports["default"] = app;
