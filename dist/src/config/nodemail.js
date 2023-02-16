"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodemailerConfig = void 0;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.nodemailerConfig = {
    secret: process.env.SECRET,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZW1haWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uZmlnL25vZGVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFnQztBQUVoQyxJQUFBLGVBQU0sR0FBRSxDQUFDO0FBT0ksUUFBQSxnQkFBZ0IsR0FBRztJQUM5QixNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNO0lBQzFCLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVM7SUFDM0IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYTtDQUNoQyxDQUFDIn0=