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
exports.educatorLoginHandler = exports.educatorRegisterHandler = void 0;
var constants_1 = require("../constants");
var model_1 = require("../model");
var emailsend_1 = require("../service/emailsend");
/**
 * route api/v1/educator/register
 *
 * @param {string} fullName
 * @param {string} email
 * @param {string} password
 * @returns {message}
 * @access public
 * @discription educator Registration
 */
var educatorRegisterHandler = function (req, res, _) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, fullName, password, user, data, newCode, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, email = _a.email, fullName = _a.fullName, password = _a.password;
                return [4 /*yield*/, model_1.User.findOne({ email: email })];
            case 1:
                user = _b.sent();
                if (user) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.CONFLICT)
                            .json({ error: constants_1.HttpMessage.EDUCATOR_ALREADY_REGISTER })];
                }
                return [4 /*yield*/, new model_1.User({
                        fullName: fullName,
                        email: email,
                        password: password,
                        role: 'educator',
                    }).save()];
            case 2:
                data = _b.sent();
                newCode = data.confirmationCode;
                return [4 /*yield*/, (0, emailsend_1.sendMail)(email, newCode)];
            case 3:
                _b.sent();
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.CREATED)
                        .json({ message: constants_1.HttpMessage.PLEASE_VERIFY_EMAIL })];
            case 4:
                error_1 = _b.sent();
                console.log(error_1);
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR)
                        .json({ error: constants_1.HttpMessage.INTERNAL_SERVER_ERROR })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.educatorRegisterHandler = educatorRegisterHandler;
/**
 * api end point api/v1//educator/login
 *
 * @param {String} email
 * @param {String} password
 * @access public
 * @discription Educator token verification controller.
 */
var educatorLoginHandler = function (req, res, _) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, educatorToken, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, model_1.User.findOne({ email: email })];
            case 1:
                user = _b.sent();
                if (!user || !user.isPasswordMatched(password)) {
                    return [2 /*return*/, res
                            .status(constants_1.HttpMessageCode.UNAUTHORIZED)
                            .json({ error: constants_1.HttpMessage.INVALID_EMAIL })];
                }
                if (!user.isVerified) {
                    return [2 /*return*/, res.status(constants_1.HttpMessageCode.NOT_FOUND).send({
                            message: constants_1.HttpMessage.USER_EMAIL_NOT_VERIFIED,
                        })];
                }
                educatorToken = user.generateAuthToken();
                return [2 /*return*/, res
                        .json({
                        statusCode: constants_1.HttpMessageCode.OK,
                        message: constants_1.HttpMessage.LOGIN_SUCCESSFULLY,
                        data: educatorToken,
                    })];
            case 2:
                error_2 = _b.sent();
                return [2 /*return*/, res
                        .status(constants_1.HttpMessageCode.NOT_ACCEPTABLE)
                        .json({ error: error_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.educatorLoginHandler = educatorLoginHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWR1Y2F0b3IuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL2VkdWNhdG9yLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMENBQTREO0FBQzVELGtDQUFnQztBQUNoQyxrREFBZ0Q7QUFFaEQ7Ozs7Ozs7OztHQVNHO0FBQ0ksSUFBTSx1QkFBdUIsR0FBRyxVQUFPLEdBQWEsRUFBRSxHQUFhLEVBQUUsQ0FBZTs7Ozs7O2dCQUVqRixLQUFnQyxHQUFHLENBQUMsSUFBSSxFQUF0QyxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxRQUFRLGNBQUEsQ0FBYztnQkFDbEMscUJBQU0sWUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsRUFBQTs7Z0JBQXBDLElBQUksR0FBRyxTQUE2QjtnQkFDMUMsSUFBSSxJQUFJLEVBQUU7b0JBQ1Isc0JBQU8sR0FBRzs2QkFDUCxNQUFNLENBQUMsMkJBQWUsQ0FBQyxRQUFRLENBQUM7NkJBQ2hDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBVyxDQUFDLHlCQUF5QixFQUFFLENBQUMsRUFBQztpQkFDM0Q7Z0JBQ1kscUJBQU0sSUFBSSxZQUFJLENBQUM7d0JBQzFCLFFBQVEsVUFBQTt3QkFDUixLQUFLLE9BQUE7d0JBQ0wsUUFBUSxVQUFBO3dCQUNSLElBQUksRUFBRSxVQUFVO3FCQUNqQixDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUxILElBQUksR0FBRyxTQUtKO2dCQUNILE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3RDLHFCQUFNLElBQUEsb0JBQVEsRUFBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUE7O2dCQUE5QixTQUE4QixDQUFDO2dCQUMvQixzQkFBTyxHQUFHO3lCQUNQLE1BQU0sQ0FBQywyQkFBZSxDQUFDLE9BQU8sQ0FBQzt5QkFDL0IsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxFQUFDOzs7Z0JBRXRELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUM7Z0JBQ25CLHNCQUFPLEdBQUc7eUJBQ1AsTUFBTSxDQUFDLDJCQUFlLENBQUMscUJBQXFCLENBQUM7eUJBQzdDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsRUFBQzs7OztLQUV6RCxDQUFDO0FBMUJXLFFBQUEsdUJBQXVCLDJCQTBCbEM7QUFFRjs7Ozs7OztHQU9HO0FBRUksSUFBTSxvQkFBb0IsR0FBRyxVQUFPLEdBQWEsRUFBRSxHQUFhLEVBQUUsQ0FBZTs7Ozs7O2dCQUU5RSxLQUFzQixHQUFHLENBQUMsSUFBSSxFQUE1QixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsQ0FBYztnQkFDeEIscUJBQU0sWUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsRUFBQTs7Z0JBQXBDLElBQUksR0FBRyxTQUE2QjtnQkFDMUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDOUMsc0JBQU8sR0FBRzs2QkFDUCxNQUFNLENBQUMsMkJBQWUsQ0FBQyxZQUFZLENBQUM7NkJBQ3BDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUM7aUJBQy9DO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNwQixzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLDJCQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUNoRCxPQUFPLEVBQUUsdUJBQVcsQ0FBQyx1QkFBdUI7eUJBQzdDLENBQUMsRUFBQztpQkFDSjtnQkFDSyxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQy9DLHNCQUFPLEdBQUc7eUJBQ1AsSUFBSSxDQUFDO3dCQUNKLFVBQVUsRUFBRSwyQkFBZSxDQUFDLEVBQUU7d0JBQzlCLE9BQU8sRUFBRSx1QkFBVyxDQUFDLGtCQUFrQjt3QkFDdkMsSUFBSSxFQUFFLGFBQWE7cUJBQ3BCLENBQUMsRUFBQzs7O2dCQUVMLHNCQUFPLEdBQUc7eUJBQ1AsTUFBTSxDQUFDLDJCQUFlLENBQUMsY0FBYyxDQUFDO3lCQUN0QyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUM7Ozs7S0FFckMsQ0FBQztBQTFCVyxRQUFBLG9CQUFvQix3QkEwQi9CIn0=