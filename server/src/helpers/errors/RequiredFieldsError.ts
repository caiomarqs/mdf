class RequiredFieldsError extends Error {
    constructor() {
        super('Resource Not Found')
        this.name = "RequiredFieldsError",
        this.message = "Some fields are required!"
    }
}

export { RequiredFieldsError };