export class CustomError extends Error {
    constructor(
        public readonly message: string,
        public readonly statusCode: number = 400,
    ) {
        super(message);
    }
}

export class ForbiddenError extends CustomError {
    constructor(message: string) {
        super(message, 403);
    }
}

export class NotFoundError extends CustomError {
    constructor(message: string = 'Resource Not Found') {
        super(message, 404);
    }
}

export class UnauthorizedError extends CustomError {
    constructor(message: string = 'Unauthorized') {
        super(message, 401);
    }
}

export class BadRequestError extends CustomError {
    constructor(message: string = 'Bad Request') {
        super(message, 400);
    }
}

export class ConflictError extends CustomError {
    constructor(message: string = 'Conflict') {
        super(message, 409);
    }
}

export class InternalServerError extends CustomError {
    constructor(message: string = 'Internal Server Error') {
        super(message, 500);
    }
}

export class ServiceUnavailableError extends CustomError {
    constructor(message: string = 'Service Unavailable') {
        super(message, 503);
    }
}
