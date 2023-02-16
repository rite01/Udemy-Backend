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
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentSuccess = exports.paymentOrder = void 0;
/* eslint-disable no-await-in-loop */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
var crypto = __importStar(require("crypto"));
var razorpay_1 = __importDefault(require("razorpay"));
var async_1 = require("nanoid/async");
var model_1 = require("../model");
var payment_1 = require("../model/payment");
var paymentOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cartData, _i, cartData_1, obj, instance, option, order, paymentDetail, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('>>>>>>>>>>>');
                _b.label = 1;
            case 1:
                _b.trys.push([1, 9, , 10]);
                return [4 /*yield*/, model_1.Cart.find({ userId: req.user._id }).populate('productId')];
            case 2:
                cartData = _b.sent();
                _i = 0, cartData_1 = cartData;
                _b.label = 3;
            case 3:
                if (!(_i < cartData_1.length)) return [3 /*break*/, 8];
                obj = cartData_1[_i];
                instance = new razorpay_1.default({
                    key_id: process.env.RAZORPAY_KEY_ID,
                    key_secret: process.env.RAZORPAY_SECRET,
                });
                _a = {
                    amount: obj.productId[0].price * 100,
                    currency: 'INR'
                };
                return [4 /*yield*/, (0, async_1.nanoid)()];
            case 4:
                option = (_a.receipt = _b.sent(),
                    _a.payment_capture = '1',
                    _a);
                return [4 /*yield*/, instance.orders.create(option)];
            case 5:
                order = _b.sent();
                if (!order) {
                    return [2 /*return*/, res.status(500).send('Some error occured')];
                }
                paymentDetail = new payment_1.PaymentDetail({
                    orderId: order.id,
                    receiptId: order.receipt,
                    amount: order.amount / 100,
                    currency: order.currency,
                    createdAt: order.created_at,
                    status: order.status,
                });
                return [4 /*yield*/, paymentDetail.save()];
            case 6:
                _b.sent();
                return [2 /*return*/, res.json(order)];
            case 7:
                _i++;
                return [3 /*break*/, 3];
            case 8: return [3 /*break*/, 10];
            case 9:
                error_1 = _b.sent();
                return [2 /*return*/, res.status(500).send(error_1)];
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.paymentOrder = paymentOrder;
var paymentSuccess = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, orderCreationId, razorpayPaymentId, razorpayOrderId, razorpaySignature, shasum, digest;
    return __generator(this, function (_b) {
        try {
            _a = req.body, orderCreationId = _a.orderCreationId, razorpayPaymentId = _a.razorpayPaymentId, razorpayOrderId = _a.razorpayOrderId, razorpaySignature = _a.razorpaySignature;
            shasum = crypto.createHmac('sha256', '9MMSS2aMaJiwTAQwJ4eKlEwc');
            shasum.update("".concat(orderCreationId, "|").concat(razorpayPaymentId));
            digest = shasum.digest('hex');
            if (digest !== razorpaySignature) {
                return [2 /*return*/, res.status(400).json({ msg: 'Transaction not legit!' })];
            }
            return [2 /*return*/, res.json({
                    msg: 'success',
                    orderId: razorpayOrderId,
                    paymentId: razorpayPaymentId,
                })];
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
        return [2 /*return*/];
    });
}); };
exports.paymentSuccess = paymentSuccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3BheW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBcUM7QUFDckMsd0NBQXdDO0FBQ3hDLHlDQUF5QztBQUN6QyxzQ0FBc0M7QUFDdEMsNkNBQWlDO0FBQ2pDLHNEQUFnQztBQUNoQyxzQ0FBc0M7QUFDdEMsa0NBQWdDO0FBQ2hDLDRDQUFpRDtBQUUxQyxJQUFNLFlBQVksR0FBRyxVQUFPLEdBQVEsRUFBRSxHQUFROzs7Ozs7Z0JBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7Z0JBRUQscUJBQU0sWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFBOztnQkFBL0UsUUFBUSxHQUFRLFNBQStEO3NCQUMzRCxFQUFSLHFCQUFROzs7cUJBQVIsQ0FBQSxzQkFBUSxDQUFBO2dCQUFmLEdBQUc7Z0JBQ0osUUFBUSxHQUFHLElBQUksa0JBQVEsQ0FBQztvQkFDMUIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZTtvQkFDbkMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZTtpQkFDMUMsQ0FBQyxDQUFDOztvQkFFQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRztvQkFDcEMsUUFBUSxFQUFFLEtBQUs7O2dCQUNOLHFCQUFNLElBQUEsY0FBTSxHQUFFLEVBQUE7O2dCQUhyQixNQUFNLElBR1IsVUFBTyxHQUFFLFNBQWM7b0JBQ3ZCLGtCQUFlLEdBQUUsR0FBRzt1QkFDdkI7Z0JBRWEscUJBQU0sUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUE7O2dCQUE1QyxLQUFLLEdBQUcsU0FBb0M7Z0JBQ2xELElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1Isc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBQztpQkFDckQ7Z0JBQ0ssYUFBYSxHQUFRLElBQUksdUJBQWEsQ0FBQztvQkFDekMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO29CQUNqQixTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU87b0JBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUc7b0JBQzFCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtvQkFDeEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxVQUFVO29CQUMzQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07aUJBQ3ZCLENBQUMsQ0FBQztnQkFDSCxxQkFBTSxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUExQixTQUEwQixDQUFDO2dCQUMzQixzQkFBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDOztnQkF6QlQsSUFBUSxDQUFBOzs7OztnQkE0QjFCLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQUssQ0FBQyxFQUFDOzs7O0tBRTFDLENBQUM7QUFsQ1csUUFBQSxZQUFZLGdCQWtDdkI7QUFFSyxJQUFNLGNBQWMsR0FBRyxVQUFPLEdBQVEsRUFBRSxHQUFROzs7UUFDbkQsSUFBSTtZQUNNLEtBS0YsR0FBRyxDQUFDLElBQUksRUFKUixlQUFlLHFCQUFBLEVBQ2YsaUJBQWlCLHVCQUFBLEVBQ2pCLGVBQWUscUJBQUEsRUFDZixpQkFBaUIsdUJBQUEsQ0FDUjtZQUVQLE1BQU0sR0FBUSxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1lBQzVFLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBRyxlQUFlLGNBQUksaUJBQWlCLENBQUUsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLElBQUksTUFBTSxLQUFLLGlCQUFpQixFQUFFO2dCQUFFLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLHdCQUF3QixFQUFFLENBQUMsRUFBQzthQUFFO1lBQ3JHLHNCQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQ1osR0FBRyxFQUFFLFNBQVM7b0JBQ2QsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFNBQVMsRUFBRSxpQkFBaUI7aUJBQy9CLENBQUMsRUFBQztTQUNOO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9COzs7S0FDSixDQUFDO0FBdEJXLFFBQUEsY0FBYyxrQkFzQnpCIn0=