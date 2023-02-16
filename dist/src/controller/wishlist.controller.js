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
exports.removeWishList = exports.getWishListProduct = exports.wishList = void 0;
var model_1 = require("../model");
var constants_1 = require("../constants");
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
var wishList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, productId_1, wishListFound, productAdd, createWishlist_1, addCart, createWishlist, err_1;
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
                return [4 /*yield*/, model_1.WishList.findOne({ userId: userId })];
            case 1:
                wishListFound = _a.sent();
                if (!wishListFound) return [3 /*break*/, 3];
                productAdd = wishListFound.productId.find(function (i) { return i === productId_1; });
                if (productAdd) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.UNPROCESSABLE_ENTITY)
                            .json({ error: constants_1.HttpMessage.POST_ADD_ALREADY })];
                }
                wishListFound.isWishList = true;
                wishListFound.productId.push(productId_1);
                return [4 /*yield*/, wishListFound.save()];
            case 2:
                createWishlist_1 = _a.sent();
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.CREATED).json({
                        statusCode: constants_1.HttpMessageCode.CREATED,
                        message: constants_1.HttpMessage.ADD_WISHLIST,
                        data: createWishlist_1,
                    })];
            case 3:
                addCart = new model_1.WishList({ productId: productId_1, userId: userId });
                return [4 /*yield*/, addCart.save()];
            case 4:
                createWishlist = _a.sent();
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.CREATED).json({
                        statusCode: constants_1.HttpMessageCode.CREATED,
                        message: constants_1.HttpMessage.ADD_WISHLIST,
                        data: createWishlist,
                    })];
            case 5:
                err_1 = _a.sent();
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.UNPROCESSABLE_ENTITY)
                        .json({ error: err_1.message })];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.wishList = wishList;
var getWishListProduct = function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    var wishlistData, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, model_1.WishList.find({}).populate('productId')];
            case 1:
                wishlistData = _a.sent();
                return [2 /*return*/, res.json({ status: constants_1.HttpMessageCode.OK, message: constants_1.HttpMessage.GET_WISHLIST_PRODUCT, data: wishlistData })];
            case 2:
                err_2 = _a.sent();
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.BAD_REQUEST).json({ error: err_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getWishListProduct = getWishListProduct;
var removeWishList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, _id_1, data, found, updateData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                userId = req.user.id;
                _id_1 = req.params.id;
                return [4 /*yield*/, model_1.WishList.findOne({ userId: userId })];
            case 1:
                data = _a.sent();
                if (!data) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.UNPROCESSABLE_ENTITY)
                            .json({ error: constants_1.HttpMessage.NO_CART })];
                }
                found = data.productId.find(function (element) { return element === _id_1; });
                if (!found) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.UNPROCESSABLE_ENTITY)
                            .json({ error: constants_1.HttpMessage.NO_DATA_FOUND_FROM_THIS_ID })];
                }
                return [4 /*yield*/, model_1.WishList.findOneAndUpdate({ userId: userId }, { $pull: { productId: _id_1 } }, { new: true })];
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
exports.removeWishList = removeWishList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3dpc2hsaXN0LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsa0NBQW9DO0FBQ3BDLDBDQUE0RDtBQUU1RDs7Ozs7Ozs7R0FRRztBQUNILE1BQU07QUFDQyxJQUFNLFFBQVEsR0FBRyxVQUFPLEdBQWEsRUFBRSxHQUFhOzs7Ozs7Z0JBRXZDLE1BQU0sR0FBSyxHQUFHLENBQUMsSUFBSSxHQUFiLENBQWM7Z0JBQ3hCLGNBQWMsR0FBRyxDQUFDLElBQUksVUFBYixDQUFjO2dCQUMvQixJQUFJLENBQUMsV0FBUyxFQUFFO29CQUNaLHNCQUFPLEdBQUc7NkJBQ0wsTUFBTSxDQUFDLDJCQUFlLENBQUMsb0JBQW9CLENBQUM7NkJBQzVDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBVyxDQUFDLGtCQUFrQixFQUFFLENBQUMsRUFBQztpQkFDeEQ7Z0JBQ3FCLHFCQUFNLGdCQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxFQUFBOztnQkFBbEQsYUFBYSxHQUFHLFNBQWtDO3FCQUNwRCxhQUFhLEVBQWIsd0JBQWE7Z0JBQ1AsVUFBVSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBa0IsSUFBSyxPQUFBLENBQUMsS0FBSyxXQUFTLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQ3pGLElBQUksVUFBVSxFQUFFO29CQUNaLHNCQUFPLEdBQUc7NkJBQ0wsTUFBTSxDQUFDLDJCQUFlLENBQUMsb0JBQW9CLENBQUM7NkJBQzVDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBQztpQkFDdEQ7Z0JBQ0QsYUFBYSxDQUFDLFVBQVUs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