export declare class Response {
}
export declare class ResponseSuccess extends Response {
    private code;
    private message;
    private result;
    constructor(result: any, message?: string, code?: number);
    toJSON(): any;
}
export declare class ResponseParamsError extends Response {
    private code;
    private message;
    private errors;
    constructor(errors: any[], message?: string, code?: number);
    toJSON(): any;
}
export declare class ResponseServiceError extends Response {
    private code;
    private message;
    constructor(message?: string, code?: number);
    toJSON(): any;
}
export declare class ResponseNotFoundError extends Response {
    private code;
    private message;
    constructor(message?: string, code?: number);
    toJSON(): any;
}
export declare class ResponseMissingTokenError extends Response {
    private code;
    private message;
    constructor(message?: string, code?: number);
    toJSON(): any;
}
export declare class ResponseMissingLoginError extends Response {
    private code;
    private message;
    constructor(message?: string, code?: number);
    toJSON(): any;
}
export declare class ResponseSuccessNoResult extends Response {
    private code;
    private message;
    constructor(result: any, message?: string, code?: number);
    toJSON(): any;
}
