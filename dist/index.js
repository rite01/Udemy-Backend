"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var app_1 = __importDefault(require("./src/app"));
(0, dotenv_1.config)();
var port = process.env.PORT;
app_1.default.listen(port, function () { return console.log("listen on port ".concat(port)); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUFnQztBQUNoQyxrREFBNEI7QUFFNUIsSUFBQSxlQUFNLEdBQUUsQ0FBQztBQUVULElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBRTlCLGFBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUFrQixJQUFJLENBQUUsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLENBQUMifQ==