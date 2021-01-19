import bcrypt from 'bcrypt';

import { User } from '../models';
import { IController, IHttpResponse } from '../interfaces'
import { UserRepository } from '../db';
import { regexRules } from '../utils';
import { BadRequestError } from '../helpers';
import {
    requiredFieldsError,
    emptyFieldsError,
    created,
    serverError,
    invalidFieldsError,
    badRequest
} from '../helpers/http-helpers'
import {
    requiredFieldsValidation,
    emptyFieldsValidation,
    invalidFieldsValidation
} from '../helpers/validation-helpers';


class RegisterControler implements IController {

    repository = new UserRepository();

    async handle(req: any): Promise<IHttpResponse> {
        try {
        
            const validations = await this.validations(req);

            if (validations) {
                return validations;
            }

            const { nome, email, password } = req

            const findUser = await this.repository.getUserByEmail(email as string);

            if (findUser?.email) {
                const error = new BadRequestError(
                    "UserRegistred",
                    "User has been register!"
                )    
                return badRequest(error);
            }
    
            const user = new User(nome, email, bcrypt.hashSync(password, 10));
            const userInserted = await this.repository.insertUser(user);
            return created(userInserted);

        } catch (err) {
            return serverError(err);
        }
    }

    async validations(req: any): Promise<IHttpResponse | undefined> {
        const [
            requiredfields,
            requiredFieldsTest
        ] = requiredFieldsValidation(req, ['nome', 'email', 'password']);

        if (requiredFieldsTest) {
            return requiredFieldsError(requiredfields);
        }

        const [emptyFields, emptyieldsTest] = emptyFieldsValidation(req)

        if (emptyieldsTest) {
            return emptyFieldsError(emptyFields);
        }

        const [
            invalidFields,
            invalidFieldsTest
        ] = invalidFieldsValidation(req, [
            { field: 'nome', rule: regexRules.onlyString },
            { field: 'email', rule: regexRules.email },
            { field: 'password', rule: regexRules.pass },
        ])

        if (invalidFieldsTest) {
            return invalidFieldsError(invalidFields);
        }
    }
}

export { RegisterControler }