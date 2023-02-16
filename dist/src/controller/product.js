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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByTitle = exports.getNevTitle = exports.titleHandler = exports.deleteProduct = exports.updateProduct = exports.getSingleProduct = exports.getProduct = exports.productCreate = void 0;
var model_1 = require("../model");
var productDetail_1 = require("../model/productDetail");
var clodinary_1 = __importDefault(require("../service/clodinary"));
var constants_1 = require("../constants");
/**
 * route api/v1/create
 *
 * @param {string} heading
 * @param {string} title
 * @param {Number} price
 * @param {Number} updateDate
 * @param {Boolean} bestSeller
 * @param {string} image
 * @param {string} courseTitle
 * @param {string} discription
 * @param {Number} numReview
 * @param {string} courseSummry
 * @param {string} aboutProduct
 * @returns {message}
 * @access public
 * @discription Product Create Controller
 */
var productCreate = function (req, res, _) { return __awaiter(void 0, void 0, void 0, function () {
    var image, _a, heading, title, price, updateDate, bestSeller, courseTitle, description, numReview, hours, courseSummary, aboutProduct, category, result, prodDetail, test, createProduct, error_1;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 4, , 5]);
                image = (_b = req === null || req === void 0 ? void 0 : req.file) === null || _b === void 0 ? void 0 : _b.path;
                _a = req.body, heading = _a.heading, title = _a.title, price = _a.price, updateDate = _a.updateDate, bestSeller = _a.bestSeller, courseTitle = _a.courseTitle, description = _a.description, numReview = _a.numReview, hours = _a.hours, courseSummary = _a.courseSummary, aboutProduct = _a.aboutProduct, category = _a.category;
                return [4 /*yield*/, clodinary_1.default.uploader.upload(image)];
            case 1:
                result = _d.sent();
                prodDetail = new productDetail_1.ProductDetail({
                    courseAuthor: (_c = req === null || req === void 0 ? void 0 : req.user) === null || _c === void 0 ? void 0 : _c.id,
                    courseTitle: courseTitle,
                    description: description,
                    numReview: numReview,
                    hours: hours,
                    courseSummary: courseSummary,
                    bestSeller: bestSeller,
                    aboutProduct: aboutProduct,
                });
                return [4 /*yield*/, prodDetail.save()];
            case 2:
                test = _d.sent();
                createProduct = new model_1.Product({
                    heading: heading,
                    title: title,
                    image: { public_id: result.public_id, url: result.secure_url },
                    price: price,
                    updateDate: updateDate,
                    bestSeller: bestSeller,
                    detail: test.id,
                    category: category,
                });
                return [4 /*yield*/, createProduct.save()];
            case 3:
                _d.sent();
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.CREATED).json({
                        status: constants_1.HttpMessageCode.CREATED,
                        message: constants_1.HttpMessage.PRODUCT_CREATED_SUCCESSFULLY,
                        data: createProduct,
                    })];
            case 4:
                error_1 = _d.sent();
                console.log('error', error_1);
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR)
                        .json({ error: error_1.message })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.productCreate = productCreate;
/**
 * Route api/v1/get/product
 *
 * @param {String} detail
 * @access public
 * @returns {message}
 * @discription Get product Api controller.
 */
var getProduct = function (_, res, __) { return __awaiter(void 0, void 0, void 0, function () {
    var productList, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, model_1.Product.find({}).populate({
                        path: 'detail',
                        populate: {
                            path: 'courseAuthor',
                            model: 'user',
                        },
                    })];
            case 1:
                productList = _a.sent();
                if (productList.length === 0) {
                    return [2 /*return*/, res
                            .json({ status: constants_1.HttpMessageCode.NO_CONTENT, message: constants_1.HttpMessage.NO_DATA_FOUND })];
                }
                return [2 /*return*/, res
                        .json({ status: constants_1.HttpMessageCode.OK, message: constants_1.HttpMessage.PRODUCT_FOUND, data: productList })];
            case 2:
                error_2 = _a.sent();
                console.log('error', error_2);
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR)
                        .json({ error: error_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProduct = getProduct;
/**
 * Route api/v1/get/product/:id
 *
 * @param {String} id
 * @access public
 * @returns {message}
 * @discription Get Single Product controller.
 */
var getSingleProduct = function (req, res, _) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, model_1.Product.findOne({ _id: id }).populate({
                        path: 'detail',
                        populate: {
                            path: 'courseAuthor',
                            model: 'user',
                        },
                    })];
            case 1:
                data = _a.sent();
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.OK).json({
                        statusCode: constants_1.HttpMessageCode.OK,
                        message: constants_1.HttpMessage.GET_SINGLE_PRODUCT,
                        data: data,
                    })];
            case 2:
                error_3 = _a.sent();
                console.log('error', error_3);
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR)
                        .json({ error: error_3.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getSingleProduct = getSingleProduct;
/**
 * Route api/v1/update/product/:id
 *
 * @param {String} id
 * @access public
 * @returns {message}
 * @discription update Product controller.
 */
var updateProduct = function (req, res, _) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('.........');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, model_1.Product.findByIdAndUpdate(id, {
                        heading: req.body.heading,
                        title: req.body.title,
                        price: req.body.price,
                        updateDate: req.body.updateDate,
                        bestSeller: req.body.bestSeller,
                    }, { new: true })];
            case 2:
                data = _a.sent();
                if (!data) {
                    return [2 /*return*/, res.status(constants_1.HttpMessageCode.BAD_REQUEST).send({
                            message: constants_1.HttpMessage.PRODUCT_NOT_FOUND,
                        })];
                }
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.OK).json({
                        statusCode: constants_1.HttpMessageCode.OK,
                        message: constants_1.HttpMessage.DELETE_SINGLE_PRODUCT,
                        data: data,
                    })];
            case 3:
                error_4 = _a.sent();
                console.log('error', error_4);
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR)
                        .json({ error: error_4.message })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateProduct = updateProduct;
/**
 * Route api/v1/get/product/:id
 *
 * @param {String} _id
 * @access public
 * @returns {message}
 * @discription Delete Single Product controller.
 */
var deleteProduct = function (req, res, _) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, model_1.Product.findOneAndDelete({ _id: id })];
            case 1:
                data = _a.sent();
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.OK).json({
                        statusCode: constants_1.HttpMessageCode.OK,
                        message: constants_1.HttpMessage.DELETE_SINGLE_PRODUCT,
                        data: data,
                    })];
            case 2:
                error_5 = _a.sent();
                console.log('error>>>>', error_5);
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR)
                        .json({ error: error_5.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteProduct = deleteProduct;
/**
 * Route api/v1/createTitle
 *
 * @param {String} _id
 * @param {String} productNev
 * @access public
 * @returns {message}
 * @discription create title handler.
 */
var titleHandler = function (req, res, _) { return __awaiter(void 0, void 0, void 0, function () {
    var productNev, productTitle, data, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                productNev = req.body.productNev;
                return [4 /*yield*/, model_1.Title.findOne({ productNev: productNev })];
            case 1:
                productTitle = _a.sent();
                if (productTitle) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.CONFLICT)
                            .json({ error: constants_1.HttpMessage.TITLE_ALREADY_GIVEN })];
                }
                return [4 /*yield*/, new model_1.Title({
                        productNev: productNev,
                    }).save()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, res
                        .json({
                        statusCode: constants_1.HttpMessageCode.CREATED,
                        message: constants_1.HttpMessage.CREATED,
                        data: data,
                    })];
            case 3:
                error_6 = _a.sent();
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR)
                        .json({ error: constants_1.HttpMessage.INTERNAL_SERVER_ERROR })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.titleHandler = titleHandler;
/**
 * Route /api/v1/g/product/titleList
 *
 * @param {String} titleList
 * @access public
 * @returns {message}
 * @discription get nev title list handler.
 */
var getNevTitle = function (_, res, __) { return __awaiter(void 0, void 0, void 0, function () {
    var titleList, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, model_1.Title.find({})];
            case 1:
                titleList = _a.sent();
                if (titleList.length === 0) {
                    return [2 /*return*/, res
                            .json({ status: constants_1.HttpMessageCode.NO_CONTENT, message: constants_1.HttpMessage.NO_DATA_FOUND })];
                }
                return [2 /*return*/, res
                        .json({ status: constants_1.HttpMessageCode.OK, message: constants_1.HttpMessage.PRODUCT_FOUND, data: titleList })];
            case 2:
                error_7 = _a.sent();
                console.log('error', error_7);
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR)
                        .json({ error: error_7.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getNevTitle = getNevTitle;
/**
 * Route api/v1/get/product/bytitle/:navtitle
 *
 * @param {String} id
 * @access public
 * @returns {message}
 * @discription Get Product By Title controller.
 */
var getProductByTitle = function (req, res, _) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, model_1.Product.find({ category: id }).populate('detail')];
            case 1:
                data = _a.sent();
                return [2 /*return*/, res.status(constants_1.HttpMessageCode.OK).json({
                        statusCode: constants_1.HttpMessageCode.OK,
                        message: "Product List ".concat(id),
                        data: data,
                    })];
            case 2:
                error_8 = _a.sent();
                console.log('error', error_8);
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR)
                        .json({ error: error_8.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProductByTitle = getProductByTitle;
// Payment
// export const paymentOrder = async (_: any, res: any) => {
//   try {
//     const instance = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY_ID,
//       key_secret: process.env.RAZORPAY_SECRET,
//     });
//     const options = {
//       amount: 100, // amount in smallest currency unit
//       currency: 'INR',
//       receipt: 'receipt_order_74394',
//     };
//     const order = await instance.orders.create(options);
//     if (!order) return res.status(500).send('Some error occured');
//     res.json(order);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
// export const paymentSuccess = async (req: any, res: any) => {
//   try {
//     // getting the details back from our font-end
//     const {
//       orderCreationId,
//       razorpayPaymentId,
//       razorpayOrderId,
//       razorpaySignature,
//     } = req.body;
//     const shasum: any = crypto.createHmac('sha256', '9MMSS2aMaJiwTAQwJ4eKlEwc');
//     shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
//     const digest = shasum.digest('hex');
//     if (digest !== razorpaySignature) { return res.status(400).json({ msg: 'Transaction not legit!' }); }
//     res.json({
//       msg: 'success',
//       orderId: razorpayOrderId,
//       paymentId: razorpayPaymentId,
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsa0NBQTBDO0FBQzFDLHdEQUF1RDtBQUN2RCxtRUFBOEM7QUFDOUMsMENBQTREO0FBRTVEOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUVJLElBQU0sYUFBYSxHQUFHLFVBQU8sR0FBYSxFQUFFLEdBQWEsRUFBRSxDQUFlOzs7Ozs7O2dCQUV2RSxLQUFLLEdBQUcsTUFBQSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsSUFBSSwwQ0FBRSxJQUFJLENBQUM7Z0JBQ3hCLEtBYUYsR0FBRyxDQUFDLElBQUksRUFaVixPQUFPLGFBQUEsRUFDUCxLQUFLLFdBQUEsRUFDTCxLQUFLLFdBQUEsRUFDTCxVQUFVLGdCQUFBLEVBQ1YsVUFBVSxnQkFBQSxFQUNWLFdBQVcsaUJBQUEsRUFDWCxXQUFXLGlCQUFBLEVBQ1gsU0FBUyxlQUFBLEVBQ1QsS0FBSyxXQUFBLEVBQ0wsYUFBYSxtQkFBQSxFQUNiLFlBQVksa0JBQUEsRUFDWixRQUFRLGNBQUEsQ0FDRztnQkFDRSxxQkFBTSxtQkFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUE7O2dCQUFoRCxNQUFNLEdBQUcsU0FBdUM7Z0JBQ2hELFVBQVUsR0FBRyxJQUFJLDZCQUFhLENBQUM7b0JBQ25DLFlBQVksRUFBRSxNQUFBLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxJQUFJLDBDQUFFLEVBQUU7b0JBQzNCLFdBQVcsYUFBQTtvQkFDWCxXQUFXLGFBQUE7b0JBQ1gsU0FBUyxXQUFBO29CQUNULEtBQUssT0FBQTtvQkFDTCxhQUFhLGVBQUE7b0JBQ2IsVUFBVSxZQUFBO29CQUNWLFlBQVksY0FBQTtpQkFDYixDQUFDLENB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