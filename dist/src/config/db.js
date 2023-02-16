"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.default = (function () {
    var connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        (0, mongoose_1.connect)("".concat(process.env.DB), connectionParams);
        console.log('Connection SuccessFully............');
    }
    catch (error) {
        console.log(error, 'Could not connect to database...........', error);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uZmlnL2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQW1DO0FBRW5DLG1CQUFlO0lBQ2IsSUFBTSxnQkFBZ0IsR0FBUTtRQUM1QixlQUFlLEVBQUUsSUFBSTtRQUNyQixrQkFBa0IsRUFBRSxJQUFJO0tBQ3pCLENBQUM7SUFDRixJQUFJO1FBQ0YsSUFBQSxrQkFBTyxFQUFDLFVBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztLQUNwRDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsMENBQTBDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDdkU7QUFDSCxDQUFDLEVBQUMifQ==