"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetail = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var detailSchema = new mongoose_1.default.Schema({
    courseAuthor: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'user',
    },
    courseTitle: { type: String, require: true },
    description: { type: String, require: true },
    numReview: { type: Number, require: true },
    hours: { type: Number, require: true },
    courseSummary: { type: String, require: true },
    aboutProduct: { type: String, require: true },
});
exports.ProductDetail = mongoose_1.default.model('productDetail', detailSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdERldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbC9wcm9kdWN0RGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUE4QztBQWU5QyxJQUFNLFlBQVksR0FBRyxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLFlBQVksRUFBRTtRQUNaLElBQUksRUFBRSxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUNwQyxHQUFHLEVBQUUsTUFBTTtLQUNaO0lBQ0QsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQzVDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtJQUM1QyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDMUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ3RDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtJQUM5QyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7Q0FDOUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxhQUFhLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQVUsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDIn0=