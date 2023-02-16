"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../controller/product");
var authCheck_1 = require("../middleware/authCheck");
var checkRole_1 = require("../middleware/checkRole");
var multer_1 = __importDefault(require("../service/multer"));
var product_validation_1 = require("../validation/product.validation");
var productRoute = require('express').Router();
var PRODUCT = require('../constants').Routes.PRODUCT;
/**
 * @swagger
 * components:
 *      schemas:
 *          Product Create:
 *              type: object
 *              required :
 *                  - in: formData
 *                  - heading
 *                  - title
 *                  - price
 *                  - updateDate
 *                  - image
 *                  - courseTitle
 *                  - description
 *                  - numReview
 *                  - courseSummary
 *                  - aboutProduct
 *              properties:
 *                  heading:
 *                      type: string
 *                  title:
 *                      type: string
 *                  price:
 *                      type: number
 *                  updateDate:
 *                      type: string
 *                  image:
 *                      type: string
 *                      format: binary
 *                  courseTitle:
 *                      type: string
 *                  description:
 *                      type: string
 *                  courseSummary:
 *                      type: string
 *                  aboutProduct:
 *                      type: string
 *
 */
/**
 * @swagger
/api/v1/create/:id:
 *  post:
 *      summary: Product Create
 *      tags: [Product Create - (role-'educator')]
 *      content-type: multipart/form-data;
 *      requestBody:
 *         required: true
 *         content:
 *          multipart/form-data:
 *            schema:
 *              $ref: '#/components/schemas/Product Create'
 *
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
productRoute.post(PRODUCT.POSTCREATE, authCheck_1.verifyToken, (0, checkRole_1.checkRole)('educator'), multer_1.default, product_validation_1.productValidation, product_1.productCreate);
/**
 * @swagger
 * components:
 *      schemas:
 *          Product Create:
 *              type: object
 *
 */
/**
 * @swagger
 /api/v1/getallproduct:
 *  get:
 *      summary: Get All Product
 *      tags: [Product Create - (role-'educator')]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Product Create'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
productRoute.get(PRODUCT.GETPRODUCT, product_1.getProduct);
/**
 * @swagger
 * components:
 *      schemas:
 *          Product Create:
 *              type: object
 *
 */
/**
 * @swagger
 /api/v1/get/product/:id:
 *  get:
 *      summary: Get Product By Id
 *      tags: [Product Create - (role-'educator')]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Product Create'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
productRoute.get(PRODUCT.GETPRODUCTBYID, product_1.getSingleProduct);
/**
 * @swagger
 * components:
 *      schemas:
 *          Product Create:
 *              type: object
 *
 */
/**
 * @swagger
 /api/v1/get/delete/:id:
 *  delete:
 *      summary: Delete Product
 *      tags: [Product Create - (role-'educator')]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Product Create'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
productRoute.delete(PRODUCT.DELETEPRODUCT, product_1.deleteProduct);
/**
 * @swagger
 * components:
 *      schemas:
 *          Product Create:
 *              type: object
 *              required :
 *                  - heading
 *                  - title
 *                  - price
 *                  - updateDate
 *                  - image
 *                  - courseTitle
 *                  - description
 *                  - numReview
 *                  - courseSummary
 *                  - aboutProduct
 *              properties:
 *                  heading:
 *                      type: string
 *                  title:
 *                      type: string
 *                  price:
 *                      type: number
 *                  updateDate:
 *                      type: string
 *                  image:
 *                      type: string
 *                  courseTitle:
 *                      type: string
 *                  description:
 *                      type: string
 *                  courseSummary:
 *                      type: string
 *                  aboutProduct:
 *                      type: string
 *
 */
/**
 * @swagger
/api/v1/update/product/:id:
 *  patch:
 *      summary: Product create
 *      tags: [Product Create - (role-'educator')]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Product Create'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
productRoute.patch(PRODUCT.UPDATEPRODUCT, product_1.updateProduct);
/**
 * @swagger
 * components:
 *      schemas:
 *          Product Create:
 *              type: object
 *
 */
/**
 * @swagger
 /api/v1/getproduct/bytitle/:title:
 *  get:
 *      summary: Get Title List
 *      tags: [Product Create - (role-'educator')]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Product Create'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
productRoute.get(PRODUCT.GETPRODUCTBYTITLE, product_1.getProductByTitle);
/**
 * @swagger
 * components:
 *      schemas:
 *          Product Nev Title:
 *              type: object
 *              required :
 *                  - productNev
 *              properties:
 *                  productNev:
 *                      type: string
 *
 */
/**
 * @swagger
/api/v1/createTitle:
 *  post:
 *      summary: Create Nev Title
 *      tags: [Product Nev Title - (role-'educator')]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Product Nev Title'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
productRoute.post(PRODUCT.TITLE, product_1.titleHandler);
/**
 * @swagger
 * components:
 *      schemas:
 *          Product Nev Title:
 *              type: object
 *
 */
/**
 * @swagger
 /api/v1/product/titleList:
 *  get:
 *      summary: Get Title List
 *      tags: [Product Nev Title - (role-'educator')]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Product Nev Title'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
productRoute.get(PRODUCT.TITLELIST, product_1.getNevTitle);
exports.default = productRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXIvcHJvZHVjdC5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlEQUUrQjtBQUMvQixxREFBc0Q7QUFDdEQscURBQW9EO0FBQ3BELDZEQUEyQztBQUMzQyx1RUFBcUU7QUFFckUsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXJDLElBQUEsT0FBTyxHQUNmLE9BQU8sQ0FBQyxjQUFjLENBQUMsZUFEUixDQUNTO0FBRTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Q0c7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBRUgsWUFBWSxDQUFDLElBQUksQ0FDZixPQUFPLENBQUMsVUFBVSxFQUNsQix1QkFBVyxFQUNYLElBQUEscUJBQVMsRUFBQyxVQUFVLENBQUMsRUFDckIsZ0JBQVUsRUFDVixzQ0FBaUIsRUFDakIsdUJBQWEsQ0FDZCxDQUFDO0FBRUY7Ozs7Ozs7R0FPRztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLG9CQUFVLENBQUMsQ0FBQztBQUVqRDs7Ozs7OztHQU9HO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsMEJBQWdCLENBQUMsQ0FBQztBQUUzRDs7Ozs7OztHQU9HO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsdUJBQWEsQ0FBQyxDQUFDO0FBRTFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUNHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsdUJBQWEsQ0FBQyxDQUFDO0FBRXpEOzs7Ozs7O0dBT0c7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLDJCQUFpQixDQUFDLENBQUM7QUFFL0Q7Ozs7Ozs7Ozs7OztHQVlHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsc0JBQVksQ0FBQyxDQUFDO0FBRS9DOzs7Ozs7O0dBT0c7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxxQkFBVyxDQUFDLENBQUM7QUFFakQsa0JBQWUsWUFBWSxDQUFDIn0=