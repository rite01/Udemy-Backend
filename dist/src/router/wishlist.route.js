"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("../controller");
var authCheck_1 = require("../middleware/authCheck");
var wishListRoute = require('express').Router();
var WISHLIST = require('../constants').Routes.WISHLIST;
/**
 * @swagger
 * components:
 *      schemas:
 *          WishList Api:
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
/api/v1/addwishlist:
 *  post:
 *      summary: Create wishlist
 *      tags: [WishList Api]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/WishList Api'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
wishListRoute.post(WISHLIST.ADDTOWISHLIST, authCheck_1.verifyToken, controller_1.wishList);
/**
 * @swagger
 * components:
 *      schemas:
 *          WishList Api:
 *              type: object
 *
 */
/**
 * @swagger
 /api/v1/getwishlist:
 *  get:
 *      summary: Get Wishlist product
 *      tags: [WishList Api]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/WishList Api'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
wishListRoute.get(WISHLIST.GETWISHLIST, authCheck_1.verifyToken, controller_1.getWishListProduct);
/**
 * @swagger
 * components:
 *      schemas:
 *          WishList Api:
 *              type: object
 *
 */
/**
 * @swagger
 /api/v1/removewishlist/:id:
 *  delete:
 *      summary: Delete Product
 *      tags: [WishList Api]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/WishList Api'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
wishListRoute.delete(WISHLIST.REMOVEWISHLIST, authCheck_1.verifyToken, controller_1.removeWishList);
exports.default = wishListRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3Qucm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVyL3dpc2hsaXN0LnJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBQTZFO0FBQzdFLHFEQUFzRDtBQUV0RCxJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFcEMsSUFBQSxRQUFRLEdBQ2xCLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBREwsQ0FDTTtBQUU1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUVILGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSx1QkFBVyxFQUFFLHFCQUFRLENBQUMsQ0FBQztBQUVsRTs7Ozs7OztHQU9HO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsdUJBQVcsRUFBRSwrQkFBa0IsQ0FBQyxDQUFDO0FBRXpFOzs7Ozs7O0dBT0c7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNILGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSx1QkFBVyxFQUFFLDJCQUFjLENBQUMsQ0FBQztBQUUzRSxrQkFBZSxhQUFhLENBQUMifQ==