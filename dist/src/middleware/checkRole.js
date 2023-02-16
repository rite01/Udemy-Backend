"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = void 0;
var constants_1 = require("../constants");
/**
 *
 * @param {String} role
 * @returns {message}
 * @access public
 * @discription Role check middleware.
 */
var checkRole = function () {
    var role = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        role[_i] = arguments[_i];
    }
    return function (req, res, next) {
        if (!role.includes(req === null || req === void 0 ? void 0 : req.user.role)) {
            return res.json({ msg: constants_1.HttpMessage.YOU_ARE_NOT_AUTHORIZED });
        }
        return next();
    };
};
exports.checkRole = checkRole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tSb2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21pZGRsZXdhcmUvY2hlY2tSb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBDQUEyQztBQUczQzs7Ozs7O0dBTUc7QUFFSSxJQUFNLFNBQVMsR0FBRztJQUFDLGNBQWlCO1NBQWpCLFVBQWlCLEVBQWpCLHFCQUFpQixFQUFqQixJQUFpQjtRQUFqQix5QkFBaUI7O0lBQVUsT0FBQSxVQUFDLEdBQWEsRUFBRSxHQUFhLEVBQUUsSUFBa0I7UUFDcEcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsdUJBQVcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7U0FDOUQ7UUFDRCxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7QUFMb0QsQ0FLcEQsQ0FBQztBQUxXLFFBQUEsU0FBUyxhQUtwQiJ9