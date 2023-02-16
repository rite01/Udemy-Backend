"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_routes_1 = __importDefault(require("./auth.routes"));
var cart_route_1 = __importDefault(require("./cart.route"));
var educator_route_1 = __importDefault(require("./educator.route"));
var paymentRoute_1 = require("./paymentRoute");
var product_route_1 = __importDefault(require("./product.route"));
var wishlist_route_1 = __importDefault(require("./wishlist.route"));
var restRouter = require('express').Router();
var _a = require('../constants').Routes, AUTH = _a.AUTH, EDUCATOR = _a.EDUCATOR, PRODUCT = _a.PRODUCT, CART = _a.CART, WISHLIST = _a.WISHLIST, PAYMENT = _a.PAYMENT;
restRouter.use(PAYMENT.DEFAULT, paymentRoute_1.paymentRoute);
restRouter.use(AUTH.DEFAULT, auth_routes_1.default);
restRouter.use(EDUCATOR.DEFAULT, educator_route_1.default);
restRouter.use(PRODUCT.DEFAULT, product_route_1.default);
restRouter.use(CART.DEFAULT, cart_route_1.default);
restRouter.use(WISHLIST.DEFAULT, wishlist_route_1.default);
exports.default = restRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOERBQXVDO0FBQ3ZDLDREQUFxQztBQUNyQyxvRUFBNkM7QUFDN0MsK0NBQThDO0FBQzlDLGtFQUEyQztBQUMzQyxvRUFBNkM7QUFFN0MsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTdDLElBQUEsS0FHRSxPQUFPLENBQUMsY0FBYyxDQUFDLE9BRHhCLEVBREMsSUFBSSxVQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsT0FBTyxhQUNqRCxDQUN5QjtBQUU1QixVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsMkJBQVksQ0FBQyxDQUFDO0FBQzlDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxxQkFBVSxDQUFDLENBQUM7QUFDekMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLHdCQUFhLENBQUMsQ0FBQztBQUNoRCxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsdUJBQVksQ0FBQyxDQUFDO0FBQzlDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBUyxDQUFDLENBQUM7QUFDeEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLHdCQUFhLENBQUMsQ0FBQztBQUVoRCxrQkFBZSxVQUFVLENBQUMifQ==