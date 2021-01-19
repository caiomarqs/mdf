type RulesType = {
    field: string,
    rule: RegExp
}

type ValidationType = [string[], boolean];

const requiredFieldsValidation = (data: {}, fileds: string[]): ValidationType => {

    const dataFields = Object.keys(data);

    const requiredFields =
        fileds.filter(field => dataFields.indexOf(field) < 0);

    if (requiredFields.length > 0) {
        return [requiredFields, true]
    }

    return [[], false];
}

const emptyFieldsValidation = (data: {}): ValidationType => {

    const filtringFields = Object.entries(data).filter(([_, val]) => {
        return val === ""
    });

    const emptyFields = filtringFields.map(([key]) => key);

    if (emptyFields.length > 0) {
        return [emptyFields as string[], true]
    }

    return [[], false];
}

const invalidFieldsValidation = (data: {}, rules: RulesType[]): ValidationType => {

    const filtringFields = Object.entries(data).filter(([key, val], i) => {
        if (rules[i].field === key) {
            const value = (val as string).trim().replace(/ /, "");
            return !rules[i].rule.test(value);
        }
    });

    const invalidFields = filtringFields.map(([key]) => key);

    if (invalidFields.length > 0) {
        return [invalidFields as string[], true]
    }

    return [[], false];
}

export {
    requiredFieldsValidation,
    emptyFieldsValidation,
    invalidFieldsValidation
}