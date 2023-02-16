"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDetail = exports.paymentDetailsSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.paymentDetailsSchema = new mongoose_1.default.Schema({
    cartId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'cart',
    },
    orderId: {
        type: String,
        required: true,
    },
    receiptId: {
        type: String,
    },
    paymentId: {
        type: String,
    },
    signature: {
        type: String,
    },
    amount: {
        type: Number,
    },
    currency: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    status: {
        type: String,
    },
});
exports.PaymentDetail = mongoose_1.default.model('PaymentDetail', exports.paymentDetailsSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbC9wYXltZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUFnQztBQWFuQixRQUFBLG9CQUFvQixHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUM7SUFDcEQsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLGtCQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQ3BDLEdBQUcsRUFBRSxNQUFNO0tBQ2Q7SUFDRCxPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07S0FDZjtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO0tBQ2Y7SUFDRCxTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtLQUNmO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLE1BQU07S0FDZjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO0tBQ2Y7SUFDRCxTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUUsSUFBSTtLQUNiO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLE1BQU07S0FDZjtDQUNKLENBQUMsQ0FBQztBQUVVLFFBQUEsYUFBYSxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFXLGVBQWUsRUFBRSw0QkFBb0IsQ0FBQyxDQUFDIn0=