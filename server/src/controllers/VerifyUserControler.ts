import { IController, IHttpResponse } from "../interfaces";
import { UserRepository } from "../db";
import {
    serverError,
    requiredFieldsError,
    emptyFieldsError,
    invalidUserError,
    ok
} from "../helpers/http-helpers";
import {
    requiredFieldsValidation,
    emptyFieldsValidation
} from "../helpers/validation-helpers";


class VerifyUserControler implements IController {

    repository = new UserRepository();

    async handle(req: any): Promise<IHttpResponse> {

        const validation = await this.validation(req);

        if (validation) {
            return validation;
        }

        try {
            const { email, password } = req;
            const [emailTest, passTest] = await this.repository.verifyUser(email, password);
            return ok({ email: emailTest, password: passTest })
        }
        catch (error) {
            return serverError(error);
        }

    }

    async validation(req: any): Promise<IHttpResponse | undefined> {
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

export { VerifyUserControler }