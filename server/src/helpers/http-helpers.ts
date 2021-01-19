import { IHttpResponse } from '../interfaces';

import {
    UnauthorizedError,
    ServerError,
    NotFoundError,
    RequiredFieldsError,
    EmptyFieldsError,
    InvalidFieldsError
} from './errors'

enum HTTP_CODE {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    REQUEST_TIMEOUT = 408,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502
}

const ok = (data: any): IHttpResponse => ({
    statusCode: HTTP_CODE.FORBIDDEN,
    body: data
})

const created = (resourseId: string): IHttpResponse => ({
    statusCode: HTTP_CODE.CREATED,
    body: { id: resourseId }
})

const noContent = (): IHttpResponse => ({
    statusCode: HTTP_CODE.NO_CONTENT,
    body: null
})

const badRequest = (error: Error): IHttpResponse => ({
    statusCode: HTTP_CODE.BAD_REQUEST,
    body: error
})

const unauthorized = (): IHttpResponse => ({
    statusCode: HTTP_CODE.UNAUTHORIZED,
    body: new UnauthorizedError()
})

const notFound = (): IHttpResponse => ({
    statusCode: HTTP_CODE.NOT_FOUND,
    body: new NotFoundError()
})

const serverError = (error: Error): IHttpResponse => ({
    statusCode: HTTP_CODE.INTERNAL_SERVER_ERROR,
    body: new ServerError(error.stack)
})

const requiredFieldsError = (fields: string[]): IHttpResponse => {

    const error = new RequiredFieldsError();

    return {
        statusCode: HTTP_CODE.BAD_REQUEST,
        body: {
            name: error.name,
            message: error.message,
            fields
        }
    }
}

const emptyFieldsError = (fields: string[]): IHttpResponse => {
    const error = new EmptyFieldsError();

    return {
        statusCode: HTTP_CODE.BAD_REQUEST,
        body: {
            name: error.name,
            message: error.message,
            fields
        }
    }

}

const invalidFieldsError = (fields: string[]): IHttpResponse => {
    const error = new InvalidFieldsError(fields);

    return {
        statusCode: HTTP_CODE.BAD_REQUEST,
        body: {
            name: error.name,
            message: error.message,
            fields
        }
    }
}

export {
    HTTP_CODE,
    badRequest,
    ok,
    created,
    unauthorized,
    serverError,
    notFound,
    noContent,
    requiredFieldsError,
    emptyFieldsError,
    invalidFieldsError
}