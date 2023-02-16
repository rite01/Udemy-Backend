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
exports.removeCart = exports.getCartProduct = exports.addCart = void 0;
var constants_1 = require("../constants");
var cart_model_1 = require("../model/cart.model");
/**
 * api end point api/v1/addcart
 *
 * @param {String} userId
 * @param {String} productId
 * @returns {message}
 * @access public
 * @discription add to cart controller.
 */
/** */
var addCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, productId_1, cartFound, productAdd, createCart_1, addCart_1, createCart, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                userId = req.user.id;
                productId_1 = req.body.productId;
                if (!productId_1) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.UNPROCESSABLE_ENTITY)
                            .json({ error: constants_1.HttpMessage.PLEASE_ADD_PRODUCT })];
                }
                return [4 /*yield*/, cart_model_1.Cart.findOne({ userId: userId })];
            case 1:
                cartFound = _a.sent();
                if (!cartFound) return [3 /*break*/, 3];
                productAdd = cartFound.productId.find(function (i) {
                    var item = i
                        .toString()
                        .replace(/ObjectId\("(.*)"\)/, '$1');
                    return item === productId_1;
                });
                if (productAdd) {
                    return [2 /*return*/, res.json({
                            statusCode: constants_1.HttpMessageCode.NOT_ACCEPTABLE,
                            message: 'already added',
                        })];
                }
                cartFound.productId.push(productId_1);
                return [4 /*yield*/, cartFound.save()];
            case 2:
                createCart_1 = _a.sent();
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.CREATED).json({
                        statusCode: constants_1.HttpMessageCode.CREATED,
                        message: constants_1.HttpMessage.ADD_PRODUCT_SUCCESSFULLY,
                        data: createCart_1,
                    })];
            case 3:
                addCart_1 = new cart_model_1.Cart({ productId: productId_1, userId: userId });
                return [4 /*yield*/, addCart_1.save()];
            case 4:
                createCart = _a.sent();
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.CREATED).json({
                        statusCode: constants_1.HttpMessageCode.CREATED,
                        message: constants_1.HttpMessage.ADD_PRODUCT_SUCCESSFULLY,
                        data: createCart,
                    })];
            case 5:
                err_1 = _a.sent();
                console.log(err_1);
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.UNPROCESSABLE_ENTITY)
                        .json({ error: err_1.message })];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.addCart = addCart;
/**
 * api end point api/v1/getcart
 *
 * @param {String} userId
 * @returns {message}
 * @access public
 * @discription get cart controller.
 */
/** */
var getCartProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cartData, _i, cartData_1, obj, test, _a, test_1, hello, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, cart_model_1.Cart.find({ userId: req.user._id }).populate('productId')];
            case 1:
                cartData = _b.sent();
                for (_i = 0, cartData_1 = cartData; _i < cartData_1.length; _i++) {
                    obj = cartData_1[_i];
                    test = obj.productId;
                    console.log(test);
                    for (_a = 0, test_1 = test; _a < test_1.length; _a++) {
                        hello = test_1[_a];
                        console.log(hello.price);
                    }
                }
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.OK).json({ message: constants_1.HttpMessage.GET_CART_PRODUCT, data: cartData })];
            case 2:
                err_2 = _b.sent();
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.BAD_REQUEST).json({ error: err_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCartProduct = getCartProduct;
/**
 * api end point api/v1/removecart/:id
 *
 * @param {String} userId
 * @param {String} _id
 * @returns {message}
 * @access public
 * @discription Remove cart product by Id update cart model.
 */
var removeCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, _id_1, data, found, updateData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                userId = req.user.id;
                _id_1 = req.params.id;
                return [4 /*yield*/, cart_model_1.Cart.findOne({ userId: userId })];
            case 1:
                data = _a.sent();
                if (!data) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.UNPROCESSABLE_ENTITY)
                            .json({ error: constants_1.HttpMessage.NO_CART })];
                }
                found = data.productId.find(function (i) {
                    var item = i
                        .toString()
                        .replace(/ObjectId\("(.*)"\)/, '$1');
                    console.log('>>>', item, _id_1);
                    return item === _id_1;
                });
                if (!found) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.UNPROCESSABLE_ENTITY)
                            .json({ error: constants_1.HttpMessage.NO_DATA_FOUND_FROM_THIS_ID })];
                }
                return [4 /*yield*/, cart_model_1.Cart.findOneAndUpdate({ userId: userId }, { $pull: { productId: _id_1 } }, { new: true })];
            case 2:
                updateData = _a.sent();
                return [4 /*yield*/, updateData.save()];
            case 3:
                _a.sent();
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.OK).json({
                        statusCode: constants_1.HttpMessageCode.OK,
                        message: constants_1.HttpMessage.DELETE_SINGLE_PRODUCT,
                        data: updateData,
                    })];
            case 4:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.BAD_REQUEST).json({ error: error_1.message })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.removeCart = removeCart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvY2FydC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLDBDQUE0RDtBQUM1RCxrREFBMkM7QUFFM0M7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNO0FBQ0MsSUFBTSxPQUFPLEdBQUcsVUFBTyxHQUFhLEVBQUUsR0FBYTs7Ozs7O2dCQUUxQyxNQUFNLEdBQUssR0FBRyxDQUFDLElBQUksR0FBYixDQUFjO2dCQUN4QixjQUFjLEdBQUcsQ0FBQyxJQUFJLFVBQWIsQ0FBYztnQkFDL0IsSUFBSSxDQUFDLFdBQVMsRUFBRTtvQkFDZCxzQkFBTyxHQUFHOzZCQUNQLE1BQU0sQ0FBQywyQkFBZSxDQUFDLG9CQUFvQixDQUFDOzZCQUM1QyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsdUJBQVcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUM7aUJBQ3BEO2dCQUNpQixxQkFBTSxpQkFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsRUFBQTs7Z0JBQTFDLFNBQVMsR0FBRyxTQUE4QjtxQkFDNUMsU0FBUyxFQUFULHdCQUFTO2dCQUNMLFVBQVUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVM7b0JBQ3BELElBQU0sSUFBSSxHQUFHLENBQUM7eUJBQ1gsUUFBUSxFQUFFO3lCQUNWLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDdkMsT0FBTyxJQUFJLEtBQUssV0FBUyxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLFVBQVUsRUFBRTtvQkFDZCxzQkFBTyxHQUFHLENBQUMsSUFBSSxDQUFDOzRCQUNkLFVBQVUsRUFBRSwyQkFBZSxDQUFDLGNBQWM7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