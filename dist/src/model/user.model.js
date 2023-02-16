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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var dotenv_1 = require("dotenv");
var mongoose_1 = __importStar(require("mongoose"));
var jsonwebtoken_1 = require("jsonwebtoken");
var bcrypt_1 = require("bcrypt");
(0, dotenv_1.config)();
var userSchema = new mongoose_1.Schema({
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    phone: { type: Number, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    cpassword: { type: String, require: true },
    isVerified: {
        type: Boolean,
        default: false,
    },
    confirmationCode: {
        type: String,
        unique: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'educator'],
        default: 'user',
    },
});
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function () {
        var token, salt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = parseInt("".concat(Math.random() * 10000), 10);
                    if (!this.isModified('password')) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, bcrypt_1.genSalt)(Number(process.env.SALT))];
                case 1:
                    salt = _a.sent();
                    this.password = (0, bcrypt_1.hashSync)(this.password, salt);
                    _a.label = 2;
                case 2:
                    this.confirmationCode = token;
                    next();
                    return [2 /*return*/];
            }
        });
    });
});
// Token Generater
var secret = process.env.JWTPRIVATEKEY;
userSchema.methods.generateAuthToken = function () {
    var token = (0, jsonwebtoken_1.sign)({ id: this.id }, secret, {
        expiresIn: process.env.EXPIRES_IN,
    });
    return token;
};
userSchema.methods.isPasswordMatched = function (password) {
    return (0, bcrypt_1.compareSync)(password, this.password);
};
exports.User = mongoose_1.default.model('user', userSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbC91c2VyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWdDO0FBQ2hDLG1EQUVrQjtBQUNsQiw2Q0FBb0M7QUFDcEMsaUNBQXdEO0FBRXhELElBQUEsZUFBTSxHQUFFLENBQUM7QUFjVCxJQUFNLFVBQVUsR0FBVyxJQUFJLGlCQUFNLENBQ25DO0lBQ0UsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ3RDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtJQUN0QyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDdEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ3RDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtJQUN6QyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFFMUMsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsS0FBSztLQUNmO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUNuQyxPQUFPLEVBQUUsTUFBTTtLQUNoQjtDQUNGLENBQ0YsQ0FBQztBQUVGLFVBQVUsQ0FBQyxHQUFHLENBQVEsTUFBTSxFQUFFLFVBQWdCLElBQUk7Ozs7OztvQkFDMUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxVQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzt5QkFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBM0Isd0JBQTJCO29CQUNoQixxQkFBTSxJQUFBLGdCQUFPLEVBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQTs7b0JBQTlDLElBQUksR0FBRyxTQUF1QztvQkFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFBLGlCQUFRLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQzs7O29CQUVoRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO29CQUM5QixJQUFJLEVBQUUsQ0FBQzs7Ozs7Q0FDUixDQUFDLENBQUM7QUFFSCxrQkFBa0I7QUFDbEIsSUFBTSxNQUFNLEdBQVEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7QUFDOUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRztJQUNyQyxJQUFNLEtBQUssR0FBRyxJQUFBLG1CQUFJLEVBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTtRQUMxQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVO0tBQ2xDLENBQUMsQ0FBQztJQUNILE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsVUFBVSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLFFBQWdCO0lBQy9ELE9BQU8sSUFBQSxvQkFBVyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDO0FBRVcsUUFBQSxJQUFJLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQVEsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDIn0=