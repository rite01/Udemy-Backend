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
exports.verifyToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var constants_1 = require("../constants");
var model_1 = require("../model");
/**
 *
 * @param {String} authorization
 * @returns {message}
 * @access public
 * @discription Token verify "auth check" middelwere.
 */
var verifyToken = function (req, res, next) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.');
    var authorization = req.headers.authorization;
    if (!authorization) {
        return res
            .status(constants_1.HttpMessageCode.UNAUTHORIZED)
            .json({ error: constants_1.HttpMessage.MUST_BE_LOGIN });
    }
    var token = authorization.replace('Bearer ', '');
    var key = process.env.JWTPRIVATEKEY;
    return jsonwebtoken_1.default.verify(token, key, function (err, payload) { return __awaiter(void 0, void 0, void 0, function () {
        var id, userFound;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (err) {
                        return [2 /*return*/, res
                                .status(constants_1.HttpMessageCode.UNAUTHORIZED)
                                .json({ error: constants_1.HttpMessage.MUST_BE_LOGIN })];
                    }
                    id = payload.id;
                    return [4 /*yield*/, model_1.User.findById(id)];
                case 1:
                    userFound = _a.sent();
                    req.user = userFound;
                    return [2 /*return*/, next()];
            }
        });
    }); });
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aENoZWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21pZGRsZXdhcmUvYXV0aENoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhEQUErQjtBQUUvQiwwQ0FBNEQ7QUFDNUQsa0NBR2tCO0FBZ0NsQjs7Ozs7O0dBTUc7QUFFSSxJQUFNLFdBQVcsR0FBRyxVQUFDLEdBQWEsRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQy9DLElBQUEsYUFBYSxHQUFLLEdBQUcsQ0FBQyxPQUFPLGNBQWhCLENBQWlCO0lBQ3RDLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFDbEIsT0FBTyxHQUFHO2FBQ1AsTUFBTSxDQUFDLDJCQUFlLENBQUMsWUFBWSxDQUFDO2FBQ3BDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7S0FDL0M7SUFDRCxJQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRCxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUN0QyxPQUFPLHNCQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRyxHQUF5QixFQUFFLFVBQU8sR0FBUSxFQUFFLE9BQVk7Ozs7O29CQUNoRixJQUFJLEdBQUcsRUFBRTt3QkFDUCxzQkFBTyxHQUFHO2lDQUNQLE1BQU0sQ0FBQywyQkFBZSxDQUFDLFlBQVksQ0FBQztpQ0FDcEMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLHVCQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBQztxQkFDL0M7b0JBQ08sRUFBRSxHQUFLLE9BQU8sR0FBWixDQUFhO29CQUNBLHFCQUFNLFlBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUE7O29CQUF4QyxTQUFTLEdBQVEsU0FBdUI7b0JBQzlDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO29CQUNyQixzQkFBTyxJQUFJLEVBQUUsRUFBQzs7O1NBQ2YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBckJXLFFBQUEsV0FBVyxlQXFCdEIifQ==