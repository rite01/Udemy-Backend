"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = void 0;
var constants_1 = require("../constants");
var joi = require('joi');
/**
 *
 * @param {String} heading
 * @param {String} title
 * @param {Number} price
 * @param {String} image
 * @param {String} courseTitle
 * @param {Number} updateDate
 * @param {String} discription
 * @param {String} courseAuther
 * @param {String} aboutProduct
 * @param {String} courseSummry
 * @param {Number} hours
 * @returns {message}
 * @description joi validation product
 */
var productValidation = function (req, res, next) {
    var productSchema = joi.object({
        heading: joi.string().required().label('Heading'),
        title: joi.string().required().label('Product Title'),
        price: joi.number().required().label('Price'),
        image: joi.any(),
        updateDate: joi.string().required().label('Update Date'),
        courseTitle: joi.string().required().label('Course Title'),
        description: joi.string().required().label('Product description'),
        courseAuther: joi.string().label('Course Auther'),
        hours: joi.number().required().label('course Hours'),
        category: joi.string(),
        courseSummary: joi.string().required().label('Course Summry'),
        aboutProduct: joi.string().required().label('About Product'),
    });
    if (!req.body) {
        return res.json({
            message: 'file is req',
        });
    }
    var error = productSchema.validate(req.body).error;
    if (error) {
        return res.json({
            status: constants_1.HttpMessageCode.BAD_REQUEST,
            message: error.details[0].message,
        });
    }
    return next();
};
exports.productValidation = productValidation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC52YWxpZGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vcHJvZHVjdC52YWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBDQUErQztBQUUvQyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFM0I7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUksSUFBTSxpQkFBaUIsR0FBRyxVQUFDLEdBQWEsRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDaEYsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMvQixPQUFPLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDakQsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQ3JELEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM3QyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRTtRQUNoQixVQUFVLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDeEQsV0FBVyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQzFELFdBQVcsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1FBQ2pFLFlBQVksRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUNqRCxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDcEQsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUU7UUFDdEIsYUFBYSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQzdELFlBQVksRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztLQUM3RCxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtRQUNiLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztZQUNkLE9BQU8sRUFBRSxhQUFhO1NBQ3ZCLENBQUMsQ0FBQztLQUNKO0lBQ08sSUFBQSxLQUFLLEdBQUssYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQXJDLENBQXNDO0lBQ25ELElBQUksS0FBSyxFQUFFO1FBQ1QsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ2QsTUFBTSxFQUFFLDJCQUFlLENBQUMsV0FBVztZQUNuQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO1NBQ2xDLENBQUMsQ0FBQztLQUNKO0lBQ0QsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUM7QUE1QlcsUUFBQSxpQkFBaUIscUJBNEI1QiJ9