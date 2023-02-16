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
exports.getUser = exports.loginHandler = exports.resendOtp = exports.verifyUser = exports.registerHandler = void 0;
var model_1 = require("../model");
var constants_1 = require("../constants");
var emailsend_1 = require("../service/emailsend");
/**
 * user Registration
 * route api/v1/register
 *
 * @param {string} fullName
 * @param {string} email
 * @param {string} password
 * @returns {message}
 * @access public
 * @discription user registration
 */
var registerHandler = function (req, res, _) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, fname, lname, password, cpassword, user, data, newCode, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, email = _a.email, fname = _a.fname, lname = _a.lname, password = _a.password, cpassword = _a.cpassword;
                console.log(req.body);
                return [4 /*yield*/, model_1.User.findOne({ email: email })];
            case 1:
                user = _b.sent();
                if (user) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.CONFLICT)
                            .json({ error: constants_1.HttpMessage.USER_ALREADY_REGISTER })];
                }
                return [4 /*yield*/, new model_1.User({
                        fname: fname,
                        lname: lname,
                        email: email,
                        cpassword: cpassword,
                        password: password,
                    }).save()];
            case 2:
                data = _b.sent();
                newCode = data.confirmationCode;
                console.log(newCode);
                return [4 /*yield*/, (0, emailsend_1.sendMail)(email, newCode)];
            case 3:
                _b.sent();
                return [2 /*return*/, res
                        .json({
                        statusCode: constants_1.HttpMessageCode.CREATED,
                        message: constants_1.HttpMessage.PLEASE_VERIFY_EMAIL,
                    })];
            case 4:
                error_1 = _b.sent();
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR)
                        .json({ error: constants_1.HttpMessage.INTERNAL_SERVER_ERROR })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.registerHandler = registerHandler;
/**
 *  route api/v1/confirm
 *  OTP verification controller
 *
 * @param {string} confirmationCode
 * @returns {message}
 * @access public
 * @discription user token verification controller.
 */
var verifyUser = function (req, res, _) { return __awaiter(void 0, void 0, void 0, function () {
    var confirmationCode, test, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                confirmationCode = req.body.confirmationCode;
                return [4 /*yield*/, model_1.User.findOne({ confirmationCode: confirmationCode })];
            case 1:
                test = _a.sent();
                if (!test) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.UNAUTHORIZED)
                            .json({ error: constants_1.HttpMessage.INVALID_OTP })];
                }
                test.isVerified = true;
                if (test.isVerified !== true) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.UNAUTHORIZED)
                            .json({ error: constants_1.HttpMessage.ALREADY_VERIFY })];
                }
                return [4 /*yield*/, test.save()];
            case 2:
                _a.sent();
                return [2 /*return*/, res
                        .json({
                        statusCode: constants_1.HttpMessageCode.CREATED,
                        message: constants_1.HttpMessage.EMAIL_VERIFIED,
                    })];
            case 3:
                error_2 = _a.sent();
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR)
                        .json({ error: constants_1.HttpMessage.INTERNAL_SERVER_ERROR })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.verifyUser = verifyUser;
/**
 * end point api/v1/resend
 * resend otp api
 *
 * @param {Number} confirmationCode
 * @returns {message}
 * @access public
 * @discription user token verification controller.
 */
var resendOtp = function (_, res, __) { return __awaiter(void 0, void 0, void 0, function () {
    var token, user, _id, data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                token = parseInt("".concat(Math.random() * 1000000), 10);
                return [4 /*yield*/, model_1.User.findOne().sort({ _id: -1 })];
            case 1:
                user = _a.sent();
                _id = user === null || user === void 0 ? void 0 : user.id;
                return [4 /*yield*/, model_1.User.findByIdAndUpdate(_id, {
                        confirmationCode: token,
                    }, { new: true })];
            case 2:
                data = _a.sent();
                return [4 /*yield*/, (0, emailsend_1.sendMail)(data === null || data === void 0 ? void 0 : data.email, data === null || data === void 0 ? void 0 : data.confirmationCode)];
            case 3:
                _a.sent();
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.CREATED)
                        .json({ message: constants_1.HttpMessage.OTP_RESEND, data: data })];
            case 4:
                error_3 = _a.sent();
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR)
                        .json({ error: constants_1.HttpMessage.INTERNAL_SERVER_ERROR })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.resendOtp = resendOtp;
/**
 *Login Controller
 * api end point api/v1/login
 *
 * @param {String} email
 * @param {String} password
 * @returns {message}
 * @access public
 * @discription user token verification controller.
 */
var loginHandler = function (req, res, _) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, token, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, model_1.User.findOne({ email: email })];
            case 1:
                user = _b.sent();
                if (!user || !(user === null || user === void 0 ? void 0 : user.isPasswordMatched(password))) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.UNAUTHORIZED)
                            .json({ statusCode: constants_1.HttpMessageCode.UNAUTHORIZED, message: constants_1.HttpMessage.INVALID_EMAIL })];
                }
                if (!user.isVerified) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.NOT_FOUND)
                            .json({ message: constants_1.HttpMessage.USER_EMAIL_NOT_VERIFIED })];
                }
                token = user === null || user === void 0 ? void 0 : user.generateAuthToken();
                return [2 /*return*/, res
                        .json({
                        statusCode: constants_1.HttpMessageCode.OK,
                        message: constants_1.HttpMessage.LOGIN_SUCCESSFULLY,
                        data: token,
                    })];
            case 2:
                error_4 = _b.sent();
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR)
                        .json({ error: error_4.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.loginHandler = loginHandler;
/**
 * Get user Api
 * api route api/v1/login
 *
 * @param {string} email
 * @param {string} password
 * @returns {message}
 * @access public
 * @discription get all user api .
 */
var getUser = function (_, res, __) { return __awaiter(void 0, void 0, void 0, function () {
    var userList, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, model_1.User.find({})];
            case 1:
                userList = _a.sent();
                console.log(userList);
                if (userList.length === 0) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.BAD_REQUEST)
                            .json({ message: constants_1.HttpMessage.BAD_REQUEST })];
                }
                return [2 /*return*/, res
                        .json({
                        statusCode: constants_1.HttpMessageCode.OK,
                        message: constants_1.HttpMessage.USER_FOUND,
                        data: userList,
                    })];
            case 2:
                error_5 = _a.sent();
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.BAD_REQUEST)
                        .json({ error: error_5.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvdXNlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGtDQUFnQztBQUNoQywwQ0FBNEQ7QUFDNUQsa0RBQWdEO0FBRWhEOzs7Ozs7Ozs7O0dBVUc7QUFFSSxJQUFNLGVBQWUsR0FBRyxVQUFPLEdBQWEsRUFBRSxHQUFhLEVBQUUsQ0FBZTs7Ozs7O2dCQUV6RSxLQUVHLEdBQUcsQ0FBQyxJQUFJLEVBRGYsS0FBSyxXQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsU0FBUyxlQUFBLENBQ3hCO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDVCxxQkFBTSxZQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUFBOztnQkFBcEMsSUFBSSxHQUFHLFNBQTZCO2dCQUMxQyxJQUFJLElBQUksRUFBRTtvQkFDUixzQkFBTyxHQUFHOzZCQUNQLE1BQU0sQ0FBQywyQkFBZSxDQUFDLFFBQVEsQ0FBQzs2QkFDaEMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLHVCQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxFQUFDO2lCQUN2RDtnQkFDWSxxQkFBTSxJQUFJLFlBQUksQ0FBQzt3QkFDMUIsS0FBSyxPQUFBO3dCQUNMLEtBQUssT0FBQTt3QkFDTCxLQUFLLE9BQUE7d0JBQ0wsU0FBUyxXQUFBO3dCQUNULFFBQVEsVUFBQTtxQkFDVCxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQU5ILElBQUksR0FBRyxTQU1KO2dCQUNILE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxH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