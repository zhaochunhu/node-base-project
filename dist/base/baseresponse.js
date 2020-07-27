"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSuccessNoResult = exports.ResponseMissingLoginError = exports.ResponseMissingTokenError = exports.ResponseNotFoundError = exports.ResponseServiceError = exports.ResponseParamsError = exports.ResponseSuccess = exports.Response = void 0;
const logger_1 = require("../common/logger");
class Response {
}
exports.Response = Response;
class ResponseSuccess extends Response {
    constructor(result, message = "Response.ResponseSuccess", code = 200) {
        super();
        this.message = message;
        this.result = result;
        this.code = code;
    }
    toJSON() {
        return {
            code: this.code,
            message: this.message,
            data: this.result
        };
    }
}
exports.ResponseSuccess = ResponseSuccess;
class ResponseParamsError extends Response {
    constructor(errors, message = "Response.ResponseParamsError", code = 422) {
        super();
        this.code = code;
        this.message = message;
        this.errors = errors;
    }
    toJSON() {
        return {
            code: this.code,
            message: this.message,
            errors: this.errors
        };
    }
}
exports.ResponseParamsError = ResponseParamsError;
class ResponseServiceError extends Response {
    constructor(message = "Response.ResponseServiceError", code = 500) {
        super();
        this.code = code;
        this.message = "服务器出现异常！";
        logger_1.ErrorLogger.error(message);
    }
    toJSON() {
        return {
            code: this.code,
            message: this.message
        };
    }
}
exports.ResponseServiceError = ResponseServiceError;
class ResponseNotFoundError extends Response {
    constructor(message = "Response.ResponseNotFoundError", code = 404) {
        super();
        this.code = code;
        this.message = message;
    }
    toJSON() {
        return {
            code: this.code,
            message: this.message
        };
    }
}
exports.ResponseNotFoundError = ResponseNotFoundError;
class ResponseMissingTokenError extends Response {
    constructor(message = "Response.ResponseMissingTokenError", code = 401) {
        super();
        this.code = code;
        this.message = message;
    }
    toJSON() {
        return {
            code: this.code,
            message: this.message
        };
    }
}
exports.ResponseMissingTokenError = ResponseMissingTokenError;
class ResponseMissingLoginError extends Response {
    constructor(message = "Response.ResponseMissingLoginError", code = 4008666) {
        super();
        this.code = code;
        this.message = message;
    }
    toJSON() {
        return {
            code: this.code,
            message: this.message
        };
    }
}
exports.ResponseMissingLoginError = ResponseMissingLoginError;
class ResponseSuccessNoResult extends Response {
    constructor(result, message = "Response.ResponseSuccess", code = 200) {
        super();
        this.message = message;
        this.code = code;
    }
    toJSON() {
        return {
            code: this.code,
            message: this.message
        };
    }
}
exports.ResponseSuccessNoResult = ResponseSuccessNoResult;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFvQyxFQUFFLE9BQWUsT0FBTztRQUN4RixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFDTSxNQUFNO1FBQ1gsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBZEQsOERBY0M7QUFFRCxNQUFhLHVCQUF3QixTQUFRLFFBQVE7SUFHbkQsWUFBWSxNQUFXLEVBQUUsVUFBa0IsMEJBQTBCLEVBQUUsT0FBZSxHQUFHO1FBQ3ZGLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFmRCwwREFlQyIsImZpbGUiOiJiYXNlL2Jhc2VyZXNwb25zZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9yTG9nZ2VyIH0gZnJvbSBcIi4uL2NvbW1vbi9sb2dnZXJcIjtcbmV4cG9ydCBjbGFzcyBSZXNwb25zZSB7IH1cblxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlU3VjY2VzcyBleHRlbmRzIFJlc3BvbnNlIHtcbiAgcHJpdmF0ZSBjb2RlOiBudW1iZXI7XG4gIHByaXZhdGUgbWVzc2FnZTogc3RyaW5nO1xuICBwcml2YXRlIHJlc3VsdDogYW55O1xuICBjb25zdHJ1Y3RvcihyZXN1bHQ6IGFueSwgbWVzc2FnZTogc3RyaW5nID0gXCJSZXNwb25zZS5SZXNwb25zZVN1Y2Nlc3NcIiwgY29kZTogbnVtYmVyID0gMjAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gIH1cbiAgdG9KU09OKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIGRhdGE6IHRoaXMucmVzdWx0XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VQYXJhbXNFcnJvciBleHRlbmRzIFJlc3BvbnNlIHtcbiAgcHJpdmF0ZSBjb2RlOiBudW1iZXI7XG4gIHByaXZhdGUgbWVzc2FnZTogc3RyaW5nO1xuICBwcml2YXRlIGVycm9yczogYW55W107XG5cbiAgY29uc3RydWN0b3IoZXJyb3JzOiBhbnlbXSwgbWVzc2FnZTogc3RyaW5nID0gXCJSZXNwb25zZS5SZXNwb25zZVBhcmFtc0Vycm9yXCIsIGNvZGU6IG51bWJlciA9IDQyMikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICB9XG5cbiAgdG9KU09OKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIGVycm9yczogdGhpcy5lcnJvcnNcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNwb25zZVNlcnZpY2VFcnJvciBleHRlbmRzIFJlc3BvbnNlIHtcbiAgcHJpdmF0ZSBjb2RlOiBudW1iZXI7XG4gIHByaXZhdGUgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZyA9IFwiUmVzcG9uc2UuUmVzcG9uc2VTZXJ2aWNlRXJyb3JcIiwgY29kZTogbnVtYmVyID0gNTAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMubWVzc2FnZSA9IFwi5pyN5Yqh5Zmo5Ye6546w5byC5bi477yBXCI7XG4gICAgRXJyb3JMb2dnZXIuZXJyb3IobWVzc2FnZSk7XG4gIH1cblxuICB0b0pTT04oKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VOb3RGb3VuZEVycm9yIGV4dGVuZHMgUmVzcG9uc2Uge1xuICBwcml2YXRlIGNvZGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nID0gXCJSZXNwb25zZS5SZXNwb25zZU5vdEZvdW5kRXJyb3JcIiwgY29kZTogbnVtYmVyID0gNDA0KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIH1cblxuICB0b0pTT04oKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VNaXNzaW5nVG9rZW5FcnJvciBleHRlbmRzIFJlc3BvbnNlIHtcbiAgcHJpdmF0ZSBjb2RlOiBudW1iZXI7XG4gIHByaXZhdGUgbWVzc2FnZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcgPSBcIlJlc3BvbnNlLlJlc3BvbnNlTWlzc2luZ1Rva2VuRXJyb3JcIiwgY29kZTogbnVtYmVyID0gNDAxKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIH1cbiAgcHVibGljIHRvSlNPTigpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2VcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNwb25zZU1pc3NpbmdMb2dpbkVycm9yIGV4dGVuZHMgUmVzcG9uc2Uge1xuICBwcml2YXRlIGNvZGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZyA9IFwiUmVzcG9uc2UuUmVzcG9uc2VNaXNzaW5nTG9naW5FcnJvclwiLCBjb2RlOiBudW1iZXIgPSA0MDA4NjY2KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIH1cbiAgcHVibGljIHRvSlNPTigpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2VcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNwb25zZVN1Y2Nlc3NOb1Jlc3VsdCBleHRlbmRzIFJlc3BvbnNlIHtcbiAgcHJpdmF0ZSBjb2RlOiBudW1iZXI7XG4gIHByaXZhdGUgbWVzc2FnZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihyZXN1bHQ6IGFueSwgbWVzc2FnZTogc3RyaW5nID0gXCJSZXNwb25zZS5SZXNwb25zZVN1Y2Nlc3NcIiwgY29kZTogbnVtYmVyID0gMjAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gIH1cblxuICB0b0pTT04oKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlXG4gICAgfTtcbiAgfVxufSJdfQ==
