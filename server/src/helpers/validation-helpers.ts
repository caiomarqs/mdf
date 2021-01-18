import { requiredFieldsError } from "./http-helpers";

const requiredFieldsValidation = (data: {}, fileds: string[]): [string[], boolean] => {

    const dataFields = Object.keys(data);

    const requiredFields =
        fileds.filter(field => dataFields.indexOf(field) < 0);

    if (requiredFields.length > 0) {
        return [requiredFields, true]
    }

    return [[], false];
}

const emptyFieldsValidation = (data: {}): [string[], boolean] => {

    const filtringFields = Object.entries(data).filter(([_, val]) => {
        return val === ""
    });

    const emptyFields = filtringFields.map(([key]) => key);

    if (emptyFields.length > 0) {
        return [emptyFields as string[], true]
    }

    return [[], false];
}

export {
    requiredFieldsValidation,
    emptyFieldsValidation
}