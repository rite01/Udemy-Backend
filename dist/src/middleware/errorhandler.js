"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.ApiError = void 0;
var constants_1 = require("../constants");
var ApiError = /** @class */ (function () {
    function ApiError(statusCode, message) {
        this.message = message;
        this.statusCode = statusCode;
    }
    return ApiError;
}());
exports.ApiError = ApiError;
var errorHandler = function (err, _, res, __) {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).send({
            statusCode: err.statusCode,
            message: err.message,
        });
    }
    return res.status(constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR).send({
        statusCode: constants_1.HttpMessageCode.INTERNAL_SERVER_ERROR,
        message: constants_1.HttpMessage.INTERNAL_SERVER_ERROR,
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JoYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21pZGRsZXdhcmUvZXJyb3JoYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBDQUE0RDtBQUc1RDtJQUtFLGtCQUFZLFVBQWtCLEVBQUUsT0FBZTtRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksNEJBQVE7QUFVZCxJQUFNLFlBQVksR0FBRyxVQUFDLEdBQVUsRUFBRSxDQUFXLEVBQUUsR0FBYSxFQUFFLEVBQWdCO0lBQ25GLElBQUksR0FBRyxZQUFZLFFBQVEsRUFBRTtRQUMzQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7WUFDMUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ3JCLENBQUMsQ0FBQztLQUNKO0lBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLDJCQUFlLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDNUQsVUFBVSxFQUFFLDJCQUFlLENBQUMscUJBQXFCO1FBQ2pELE9BQU8sRUFBRSx1QkFBVyxDQUFDLHFCQUFxQjtLQUMzQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFYVyxRQUFBLFlBQVksZ0JBV3ZCIn0=