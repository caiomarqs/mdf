class EmptyFieldsError extends Error {
    constructor() {
        super('Resource Not Found')
        this.name = "EmptyFieldsError"
        this.message = "Some fields are empty!"
    }
}

export { EmptyFieldsError };