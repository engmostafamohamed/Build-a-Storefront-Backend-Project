"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.addProduct = exports.deleteOrder = exports.updateOrders = exports.oneOrders = exports.createOrder = exports.allOrders = void 0;
var orders_1 = __importDefault(require("../model/orders"));
var orderStore = new orders_1["default"]();
var allOrders = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allOrders_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderStore.getAll()];
            case 1:
                allOrders_1 = _a.sent();
                return [2 /*return*/, res.json({
                        status: "success",
                        data: allOrders_1,
                        message: "get all orders  Succesfully"
                    })];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.allOrders = allOrders;
var createOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orders, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderStore.create(req.body)];
            case 1:
                orders = _a.sent();
                return [2 /*return*/, res.json({
                        status: "success",
                        data: orders,
                        message: "orders created  Succesfully"
                    })];
            case 2:
                error_2 = _a.sent();
                console.error(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createOrder = createOrder;
var oneOrders = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var oneOrder, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderStore.getOne(req.params.id)];
            case 1:
                oneOrder = _a.sent();
                return [2 /*return*/, res.json({
                        status: "success",
                        data: oneOrder,
                        message: "get one orders  Succesfully"
                    })];
            case 2:
                error_3 = _a.sent();
                console.error(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.oneOrders = oneOrders;
var updateOrders = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updateOrder, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderStore.update(req.body, req.params.id)];
            case 1:
                updateOrder = _a.sent();
                return [2 /*return*/, res.json({
                        status: "success",
                        data: updateOrder,
                        message: "Order updated"
                    })];
            case 2:
                error_4 = _a.sent();
                console.error(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateOrders = updateOrders;
var deleteOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderStore["delete"](req.params.id)];
            case 1:
                _a.sent();
                return [2 /*return*/, res.json({
                        message: "User deleted Succesfully"
                    })];
            case 2:
                error_5 = _a.sent();
                console.error(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteOrder = deleteOrder;
var addProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderId, productId, addedProduct, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                orderId = req.params.id;
                productId = req.body.productId;
                return [4 /*yield*/, orderStore.addProduct(orderId, productId)];
            case 1:
                addedProduct = _a.sent();
                return [2 /*return*/, res.json({
                        status: "success",
                        data: addedProduct,
                        message: "Order created"
                    })];
            case 2:
                error_6 = _a.sent();
                console.error(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addProduct = addProduct;
