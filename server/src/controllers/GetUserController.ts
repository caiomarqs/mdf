import { Request } from 'express'

import { IController, IHttpResponse, IAuthUser } from '../interfaces'
import { UserRepository } from '../db'
import { emptyFieldsValidation } from '../helpers/validation-helpers'
import { tokenValidation } from '../helpers/auth-helpers'
import { BadRequestError } from '../helpers/errors'
import {
    badRequest,
    emptyFieldsError,
    notFound,
    ok,
    unauthorized
} from '../helpers/http-helpers'


class GetUserController implements IController {

    repositroy = new UserRepository();
    userId: string;

    constructor(userId: string) {
        this.userId = userId
    }

    async handle(req: Request, headers: any): Promise<IHttpResponse> {

        const validations = await this.validations(req);
        if (validations) {
            return validations;
        }


        let authorization: string = headers.authorization ?? "";
        if (!authorization.trim().includes("Bearer ")) {
            return badRequest(new BadRequestError(
                "InvalidHeader",
                "The authorization header is invalid!"
            ))
        }

        const { auth } = tokenValidation(authorization);
        if (auth) {

            const findUser = await this.repositroy.getUserByID(this.userId);
            
            if (findUser) {
                return ok(findUser);
            }

            return notFound();
        }

        return unauthorized();
    }

    async validations(req: any): Promise<IHttpResponse | undefined> {
        const [emptyFields, emptyieldsTest] = emptyFieldsValidation(req)

        if (emptyieldsTest) {
            return emptyFieldsError(emptyFields);
        }
    }
}

export { GetUserController }