import { Request } from 'express'

import { IController, IHttpResponse } from '../interfaces'
import { emptyFieldsValidation } from '../helpers/validation-helpers'
import { emptyFieldsError, ok } from '../helpers/http-helpers'

class UpdateUserController implements IController {
    async handle(req: Request): Promise<IHttpResponse> {

        const validations = await this.validations(req);

        if (validations) {
            return validations;
        }


        const token = req.headers.authorization?.valueOf();

        if (token) {
            console.log(token)
        }

        return ok({});
    }

    async validations(req: any): Promise<IHttpResponse | undefined> {
        const [emptyFields, emptyieldsTest] = emptyFieldsValidation(req)

        if (emptyieldsTest) {
            return emptyFieldsError(emptyFields);
        }
    }
}

export { UpdateUserController }