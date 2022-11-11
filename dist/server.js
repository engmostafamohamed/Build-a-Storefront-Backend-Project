"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var port = 3000;
var app = (0, express_1["default"])();
// http login middleware
app.use((0, morgan_1["default"])('common'));
//http security middleware
app.use((0, helmet_1["default"])());
// middleware to parse request
app.use(express_1["default"].json());
// start express server
app.listen(port, function () {
    console.log("Server is starting at :".concat(port));
});
// add routing for / path
app.get("/", function (req, res) {
    console.log(req.body);
    res.send("this is the ____ route");
});
exports["default"] = app;
