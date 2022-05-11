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
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../models/product");
var isModelExist_1 = require("../utils/isModelExist");
var verifyAuthTokenMIDD_1 = require("../middlewares/verifyAuthTokenMIDD");
/*
--- Products ---
Index
Show
Create [token required]
*/
var store = new product_1.ProductModel();
var productRoutes = function (app) {
    app.get('/products', verifyAuthTokenMIDD_1.verifyAuthToken, index);
    app.get('/products/:productId', verifyAuthTokenMIDD_1.verifyAuthToken, show);
    app.post('/products', verifyAuthTokenMIDD_1.verifyAuthToken, create);
    // show how the product belongs to a single order.
    // If we were to add a user as an owner of the order
    app.get('/user/:userID/orders/:orderID/products', userOrderProducts);
};
var index = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.index()];
            case 1:
                products = _a.sent();
                if (products) {
                    res.status(200).json(products);
                }
                else {
                    res.status(404).json({ message: 'No products found' });
                }
                return [2 /*return*/];
        }
    });
}); };
var show = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.show(_req.params.productId)];
            case 1:
                product = _a.sent();
                if (product) {
                    res.json(product);
                }
                else {
                    res.status(404).json({
                        message: "Product with id = (".concat(_req.params.productId, ") not found"),
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, createProduct, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                product = {
                    name: req.body.name,
                    price: req.body.price,
                };
                return [4 /*yield*/, store.create(product)];
            case 1:
                createProduct = _a.sent();
                res.json(createProduct);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                if (error_1 instanceof Error) {
                    res.status(400).json({ error: error_1 });
                }
                else {
                    res.status(400).json({ error: error_1 });
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var userOrderProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userExist, orderBelongToUser, products, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, isModelExist_1.isUserExist)(req.params.userID)];
            case 1:
                userExist = _a.sent();
                return [4 /*yield*/, (0, isModelExist_1.isOrderBelongToUser)(req.params.orderID, req.params.userID)];
            case 2:
                orderBelongToUser = _a.sent();
                if (!(!userExist || !orderBelongToUser)) return [3 /*break*/, 3];
                res.status(404).json({
                    message: "User with id = (".concat(req.params.userID, ") or order with id = (").concat(req.params.orderID, ") not found"),
                });
                return [3 /*break*/, 6];
            case 3:
                _a.trys.push([3, 5, , 6]);
                return [4 /*yield*/, store.userOrderProducts(req.params.userID, req.params.orderID)];
            case 4:
                products = _a.sent();
                res.json(products);
                return [3 /*break*/, 6];
            case 5:
                error_2 = _a.sent();
                if (error_2 instanceof Error) {
                    res.status(400).json({ error: error_2.message });
                }
                else {
                    res.status(400).json({ error: error_2 });
                }
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.default = productRoutes;
