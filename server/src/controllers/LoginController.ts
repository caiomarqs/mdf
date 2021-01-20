import { Request } from "express";

import { UserRepository } from '../db';
import { IController, IHttpResponse } from '../interfaces';
import {
    requiredFieldsValidation,
    emptyFieldsValidation
} from '../helpers/validation-helpers'
import {
    ok,
    unauthorized,
    serverError,
    notFound,
    requiredFieldsError,
    emptyFieldsError
} from '../helpers/http-helpers';
import { getToken } from '../helpers/auth-helpers';

class LoginController implements IController {

    repository = new UserRepository();

    async handle(req: any): Promise<IHttpResponse> {

        const validations = await this.validations(req);

        if (validations) {
            return validations
        }

        const { email, password } = req

        try {
            const findUser = await this.repository.getUserByEmail(email as string);

            if (findUser) {
                const auth = await this.repository.verifyUser(
                    email as string,
                    password as string
                );
                
                if (auth[0] === true && auth[1] === true) {
                    return ok({
                        id: findUser.id,
                        token: getToken(findUser.id as string)
                    })
                }

                return unauthorized();
            }

            return notFound();
        }
        catch (err) {
            return serverError(err);
        }
    }

    async validations(req: any): Promise<IHttpResponse | undefined> {
        const [
            requiredfields,
            requiredFieldsTest
        ] = requiredFieldsValidation(req, ['email', 'password']);

        if (requiredFieldsTest) {
            return requiredFieldsError(requiredfields);
        }

        const [emptyFields, emptyieldsTest] = emptyFieldsValidation(req)

        if (emptyieldsTest) {
            return emptyFieldsError(emptyFields);
        }
    }

}

export { LoginController }