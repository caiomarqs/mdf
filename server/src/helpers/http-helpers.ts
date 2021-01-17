import { IHttpResponse } from '../interfaces';

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



const badRequest = (error: Error): IHttpResponse => {
    return {
        statusCode: HTTP_CODE.BAD_REQUEST,
        body: error
    }
}

const ok = (data: any): IHttpResponse => {
    return {
        statusCode: HTTP_CODE.FORBIDDEN,
        body: data
    }
}

const unauthorized = (): IHttpResponse => {
    return {
        statusCode: HTTP_CODE.UNAUTHORIZED,
        body: new Error('Unauthorized')
    }
}