import { NextFunction, Response } from 'express';
import joi from 'joi';
import passwordComplexity from 'joi-password-complexity';
import { RequestB } from 'src/middleware/authCheck';
import { HttpMessageCode } from '../constants/http-statuscode';

/**
 *
 * @param {String} fullName
 * @param {String} email
 * @param {String} password
 * @returns {message}
 * @description joi validation function
 */

export const userValidation = (req: RequestB, res: Response, next: NextFunction): any => {
    const schema = joi.object({
        fname: joi.string().required().label('Full Name'),
        lname: joi.string().required().label('Last Name'),
        email: joi.string().required().label('Email'),
        phone: joi.number().required().label('phone'),
        password: passwordComplexity().required().label('Password'),
        cpassword: joi.ref('password'),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res
            .json({ status: HttpMessageCode.BAD_REQUEST, error: error.details[0].message });
    }
    return next();
};
