import { Request } from "express";

import { UserRepository } from '../db';
import { IController, IHttpResponse } from '../interfaces';
import {
    ok,
    unauthorized,
    serverError,
    notFound
} from '../helpers/http-helpers';

class LoginController implements IController {

    repository = new UserRepository();

    async handle(req: Request): Promise<IHttpResponse> {

        console.log(req.body);

        // const { email, password } = req.body
        return notFound();
        // try {
        //     const findUser =
        //         await this.repository.getUserByEmail(email as string);

        //     if (findUser) {
        //         const auth = await this.repository.authUser(
        //             email as string,
        //             password as string
        //         );

        //         return auth
        //             ? ok({ auth: true })
        //             : unauthorized();
        //     }

        //     return notFound();return notFound();
        // }
        // catch (err) {
        //     return serverError(err);
        // }
    }
}

export { LoginController }