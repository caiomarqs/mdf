class InvalidFieldsError extends Error {
    constructor(fields: string[]) {
        super('Invalid Fields Error')
        this.name = "InvalidFieldsError"
        this.message = `This fields are invalid: ${fields.toString()}`
    }
}

export { InvalidFieldsError };