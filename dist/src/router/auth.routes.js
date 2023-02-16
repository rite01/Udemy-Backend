"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("../controller");
var authRouter = require('express').Router();
var AUTH = require('../constants').Routes.AUTH;
/**
 * @swagger
 * components:
 *      schemas:
 *          UserRegister and login api:
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
/api/v1/register:
 *  post:
 *      summary: UserRegister and login api
 *      tags: [UserRegister and login api]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/UserRegister and login api'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
authRouter.post(AUTH.REGISTER, controller_1.registerHandler);
/**
 * @swagger
 * components:
 *      schemas:
 *          UserRegister and login api:
 *              type: object
 *              required :
 *                  - confirmationCode
 *              properties:
 *                  confirmationCode:
 *                      type: number
 */
/**
 * @swagger
/api/v1/otpverify:
 *  post:
 *      summary: Otp Verification and Resend Otp
 *      tags: [UserRegister and login api]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/UserRegister and login api'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
authRouter.post(AUTH.VERIFY, controller_1.verifyUser);
/**
 * @swagger
 * components:
 *      schemas:
 *          UserRegister and login api:
 *              type: object
 *              required :
 *                  - confirmationCode
 *              properties:
 *                  confirmationCode:
 *                      type: number
 */
/**
 * @swagger
/api/v1/resend:
 *  post:
 *      summary: Otp Verification and Resend Otp
 *      tags: [UserRegister and login api]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/UserRegister and login api'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '500':
 *                  description: Internal server error
 */
authRouter.post(AUTH.RESEND, controller_1.resendOtp);
/**
 * @swagger
 * components:
 *      schemas:
 *          UserRegister and login api:
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
/api/v1/login:
 *  post:
 *      summary: Login User
 *      tags: [UserRegister and login api]
 *      requestBody:
 *         required: true
 *         content:
 *                     application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/UserRegister and login api'
 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '400':
 *              description: Something Wrong
 *          '404':
 *              description: Your Email has not been verified. Please click on resend
 *          '500':
 *                  description: Internal server error
 */
authRouter.post(AUTH.LOGIN, controller_1.loginHandler);
/**
 * @swagger
 * components:
 *      schemas:
 *          UserRegister and login api:
 *              type: object
 */
/**
 * @swagger
/api/v1/alluser:
 *  get:
 *      summary: Get all user and educator
 *      tags: [UserRegister and login api]

 *      responses:
 *          '200':
 *              description: success
 *          '201':
 *              description: success
 *          '400':
 *              description: Something Wrong
 *          '404':
 *              description: Your Email has not been verified. Please click on resend
 *          '500':
 *                  description: Internal server error
 */
authRouter.get(AUTH.ALLUSER, controller_1.getUser);
exports.default = authRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVyL2F1dGgucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBRXVCO0FBRXZCLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVuQyxJQUFBLElBQUksR0FDWixPQUFPLENBQUMsY0FBYyxDQUFDLFlBRFgsQ0FDWTtBQUU1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNILFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSw0QkFBZSxDQUFDLENBQUM7QUFFaEQ7Ozs7Ozs7Ozs7O0dBV0c7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNILFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSx1QkFBVSxDQUFDLENBQUM7QUFFekM7Ozs7Ozs7Ozs7O0dBV0c7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNILFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxzQkFBUyxDQUFDLENBQUM7QUFFeEM7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7QUFDSCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUseUJBQVksQ0FBQyxDQUFDO0FBRTFDOzs7Ozs7R0FNRztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDSCxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsb0JBQU8sQ0FBQyxDQUFDO0FBRXRDLGtCQUFlLFVBQVUsQ0FBQyJ9