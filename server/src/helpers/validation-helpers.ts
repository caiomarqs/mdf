import { IHttpResponse } from '../interfaces'
import { } from './errors'
import { HTTP_CODE } from './http-helpers'

const requiredFieldsValidation = (obj: {}, fileds: string[] | string): IHttpResponse => {
    const reqFields = Object.keys(obj);

    if (reqFields.length === 0) {
        return {
            statusCode: HTTP_CODE.BAD_REQUEST,
            body: new Error("")
        }
    }

    return {
        statusCode: HTTP_CODE.BAD_REQUEST,
        body: new Error("")
    }

}