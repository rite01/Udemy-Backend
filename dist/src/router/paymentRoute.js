"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoute = void 0;
/* eslint-disable import/order */
var authCheck_1 = require("../middleware/authCheck");
var payment_1 = require("../controller/payment");
var PAYMENT = require('../constants').Routes.PAYMENT;
var paymentRoute = require('express').Router();
exports.paymentRoute = paymentRoute;
paymentRoute.post(PAYMENT.PAYMENT, authCheck_1.verifyToken, payment_1.paymentOrder);
paymentRoute.post(PAYMENT.PAYMENT_SUCCESS, authCheck_1.verifyToken, payment_1.paymentSuccess);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudFJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlci9wYXltZW50Um91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUNBQWlDO0FBQ2pDLHFEQUFzRDtBQUN0RCxpREFBcUU7QUFHdkQsSUFBQSxPQUFPLEdBQ2pCLE9BQU8sQ0FBQyxjQUFjLENBQUMsZUFETixDQUNPO0FBQzVCLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUt4QyxvQ0FBWTtBQUhyQixZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsdUJBQVcsRUFBRSxzQkFBWSxDQUFDLENBQUM7QUFDOUQsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLHVCQUFXLEVBQUUsd0JBQWMsQ0FBQyxDQUFDIn0=