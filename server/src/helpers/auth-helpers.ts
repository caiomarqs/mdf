import jwt from 'jsonwebtoken';

import { IAuthUser } from '../interfaces'

const getToken = (id: string): string => {
    return jwt.sign(
        { id },
        process.env.SECRET as string,
        { expiresIn: 216000 }
    );
}

const authUser = (token: string): any => {
    return jwt.verify(token, process.env.SECRET as string);
}

const tokenValidation = (token: string): IAuthUser => {

    if (token.includes("Bearer ")) {
        token = token.trim().split(" ")[1];
    }

    const auth = authUser(token);

    if (auth?.id) {
        return { auth: true, id: auth.id }
    }

    return { auth: false, id: "" }
}

export { getToken, authUser, tokenValidation }