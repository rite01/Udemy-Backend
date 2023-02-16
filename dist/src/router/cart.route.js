"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("../controller");
var authCheck_1 = require("../middleware/authCheck");
var cartRoute = require('express').Router();
var CART = require('../constants').Routes.CART;
/**
 * @swagger
 * components:
 *      schemas:
 *          Cart Api:
 *              type: object
 *              required :
 *                  - productId
 *                  - userId
 *                  - active
 *                  - modifiedOn
 *              properties:
 *                  productId:
 *                      type: string
 *                  userId:
 *                      type: string
 *                  active:
 *                      type: string
 *                  modifiedOn:
 *                      type: string
 */
/**
 * @swagger
/api/v1/addcart:
 *  post:
 *      summary: Create Cart
 *      tags: [Cart Api]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Cart Api'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
cartRoute.post(CART.ADDTOCART, authCheck_1.verifyToken, controller_1.addCart);
/**
 * @swagger
 * components:
 *      schemas:
 *          Cart Api:
 *              type: object
 *
 */
/**
 * @swagger
 /api/v1/getcart:
 *  get:
 *      summary: Get cart product
 *      tags: [Cart Api]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Cart Api'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
cartRoute.get(CART.GETCART, authCheck_1.verifyToken, controller_1.getCartProduct);
/**
 * @swagger
 * components:
 *      schemas:
 *          Cart Api:
 *              type: object
 *
 */
/**
 * @swagger
 /api/v1/removecart/:id:
 *  delete:
 *      summary: Delete Product
 *      tags: [Cart Api]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Cart Api'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
cartRoute.delete(CART.REMOVECART, authCheck_1.verifyToken, controller_1.removeCart);
exports.default = cartRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXIvY2FydC5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRDQUV1QjtBQUN2QixxREFBc0Q7QUFFdEQsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWxDLElBQUEsSUFBSSxHQUNaLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFEWCxDQUNZO0FBRTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBRUgsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLHVCQUFXLEVBQUUsb0JBQU8sQ0FBQyxDQUFDO0FBRXJEOzs7Ozs7O0dBT0c7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNILFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSx1QkFBVyxFQUFFLDJCQUFjLENBQUMsQ0FBQztBQUV6RDs7Ozs7OztHQU9HO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsdUJBQVcsRUFBRSx1QkFBVSxDQUFDLENBQUM7QUFFM0Qsa0JBQWUsU0FBUyxDQUFDIn0=