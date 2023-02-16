"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
var joi_1 = __importDefault(require("joi"));
var joi_password_complexity_1 = __importDefault(require("joi-password-complexity"));
var http_statuscode_1 = require("../constants/http-statuscode");
/**
 *
 * @param {String} fullName
 * @param {String} email
 * @param {String} password
 * @returns {message}
 * @description joi validation function
 */
var userValidation = function (req, res, next) {
    var schema = joi_1.default.object({
        fname: joi_1.default.string().required().label('Full Name'),
        lname: joi_1.default.string().required().label('Last Name'),
        email: joi_1.default.string().required().label('Email'),
        phone: joi_1.default.number().required().label('phone'),
        password: (0, joi_password_complexity_1.default)().required().label('Password'),
        cpassword: joi_1.default.ref('password'),
    });
    var error = schema.validate(req.body).error;
    if (error) {
        return res
            .json({ status: http_statuscode_1.HttpMessageCode.BAD_REQUEST, error: error.details[0].message });
    }
    return next();
};
exports.userValidation = userValidation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC52YWxpZGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vYXV0aC52YWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLDRDQUFzQjtBQUN0QixvRkFBeUQ7QUFFekQsZ0VBQStEO0FBRS9EOzs7Ozs7O0dBT0c7QUFFSSxJQUFNLGNBQWMsR0FBRyxVQUFDLEdBQWEsRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDM0UsSUFBTSxNQUFNLEdBQUcsYUFBRyxDQUFDLE1BQU0sQ0FBQztRQUN0QixLQUFLLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDakQsS0FBSyxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ2pELEtBQUssRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM3QyxLQUFLLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0MsUUFBUSxFQUFFLElBQUEsaUNBQWtCLEdBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQzNELFNBQVMsRUFBRSxhQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztLQUNqQyxDQUFDLENBQUM7SUFDSyxJQUFBLEtBQUssR0FBSyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBOUIsQ0FBK0I7SUFDNUMsSUFBSSxLQUFLLEVBQUU7UUFDUCxPQUFPLEdBQUc7YUFDTCxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUN2RjtJQUNELE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBZlcsUUFBQSxjQUFjLGtCQWV6QiJ9