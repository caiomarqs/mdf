class UnauthorizedError extends Error {
    constructor() {
        super('Unauthorized')
        this.name = 'UnauthorizedError',
            this.message = 'Usuario não autoriazado!'
    }
}

export { UnauthorizedError };