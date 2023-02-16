"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("../controller");
var auth_validation_1 = require("../validation/auth.validation");
var educatorRoute = require('express').Router();
var EDUCATOR = require('../constants').Routes.EDUCATOR;
/**
 * @swagger
 * components:
 *      schemas:
 *          Educator Register and Login:
 *              type: object
 *              required :
 *                  - fullName
 *                  - email
 *                  - password
 *              properties:
 *                  fullName:
 *                      type: string
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 */
/**
 * @swagger
/api/v1/educator/register:
 *  post:
 *      summary: Educator Register
 *      tags: [Educator Register and Login]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Educator Register and Login'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
educatorRoute.post(EDUCATOR.EDUCATORREGISTER, auth_validation_1.userValidation, controller_1.educatorRegisterHandler);
/**
 * @swagger
 * components:
 *      schemas:
 *          Educator Register and Login:
 *              type: object
 *              required :
 *                  - confirmationCode
 *              properties:
 *                  confirmationCode:
 *                      type: number
 */
/**
 * @swagger
/api/v1/educator/otpverify:
 *  post:
 *      summary: Otp verification
 *      tags: [Educator Register and Login]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Educator Register and Login'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
educatorRoute.post(EDUCATOR.VERIFY_OTP, controller_1.verifyUser);
/**
 * @swagger
 * components:
 *      schemas:
 *          Educator Register and Login:
 *              type: object
 *              required :
 *                  - confirmationCode
 *              properties:
 *                  confirmationCode:
 *                      type: number
 */
/**
 * @swagger
/api/v1/educator/resend:
 *  post:
 *      summary: Resend Otp
 *      tags: [Educator Register and Login]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Educator Register and Login'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
educatorRoute.post(EDUCATOR.RESEND_OTP, controller_1.resendOtp);
/**
 * @swagger
 * components:
 *      schemas:
 *          Educator Register and Login:
 *              type: object
 *              required :
 *                  - email
 *                  - password
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 */
/**
 * @swagger
/api/v1/educator/login:
 *  post:
 *      summary: Login Educator
 *      tags: [Educator Register and Login]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Educator Register and Login'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
educatorRoute.post(EDUCATOR.EDUCATORLOGIN, controller_1.educatorLoginHandler);
exports.default = educatorRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWR1Y2F0b3Iucm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVyL2VkdWNhdG9yLnJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBRXVCO0FBQ3ZCLGlFQUErRDtBQUUvRCxJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFdEMsSUFBQSxRQUFRLEdBQ2hCLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBRFAsQ0FDUTtBQUU1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNILGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFFBQVEsQ0FBQyxnQkFBZ0IsRUFDekIsZ0NBQWMsRUFDZCxvQ0FBdUIsQ0FDeEIsQ0FBQztBQUVGOzs7Ozs7Ozs7OztHQVdHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsdUJBQVUsQ0FBQyxDQUFDO0FBRXBEOzs7Ozs7Ozs7OztHQVdHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsc0JBQVMsQ0FBQyxDQUFDO0FBRW5EOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFFSCxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsaUNBQW9CLENBQUMsQ0FBQztBQUVqRSxrQkFBZSxhQUFhLENBQUMifQ==