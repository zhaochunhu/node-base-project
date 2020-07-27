"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSuccessNoResult = exports.ResponseMissingLoginError = exports.ResponseMissingTokenError = exports.ResponseNotFoundError = exports.ResponseServiceError = exports.ResponseParamsError = exports.ResponseSuccess = exports.Response = void 0;
const logger_1 = require("../logger/logger");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UvYmFzZS1yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBK0M7QUFDL0MsTUFBYSxRQUFRO0NBQUk7QUFBekIsNEJBQXlCO0FBRXpCLE1BQWEsZUFBZ0IsU0FBUSxRQUFRO0lBSTNDLFlBQVksTUFBVyxFQUFFLFVBQWtCLDBCQUEwQixFQUFFLE9BQWUsR0FBRztRQUN2RixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDbEIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQWpCRCwwQ0FpQkM7QUFFRCxNQUFhLG1CQUFvQixTQUFRLFFBQVE7SUFLL0MsWUFBWSxNQUFhLEVBQUUsVUFBa0IsOEJBQThCLEVBQUUsT0FBZSxHQUFHO1FBQzdGLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBbkJELGtEQW1CQztBQUVELE1BQWEsb0JBQXFCLFNBQVEsUUFBUTtJQUloRCxZQUFZLFVBQWtCLCtCQUErQixFQUFFLE9BQWUsR0FBRztRQUMvRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzFCLG9CQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBakJELG9EQWlCQztBQUVELE1BQWEscUJBQXNCLFNBQVEsUUFBUTtJQUlqRCxZQUFZLFVBQWtCLGdDQUFnQyxFQUFFLE9BQWUsR0FBRztRQUNoRixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBaEJELHNEQWdCQztBQUVELE1BQWEseUJBQTBCLFNBQVEsUUFBUTtJQUdyRCxZQUFZLFVBQWtCLG9DQUFvQyxFQUFFLE9BQWUsR0FBRztRQUNwRixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFDTSxNQUFNO1FBQ1gsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBZEQsOERBY0M7QUFFRCxNQUFhLHlCQUEwQixTQUFRLFFBQVE7SUFHckQsWUFBWSxVQUFrQixvQ0FBb0MsRUFBRSxPQUFlLE9BQU87UUFDeEYsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBQ00sTUFBTTtRQUNYLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQWRELDhEQWNDO0FBRUQsTUFBYSx1QkFBd0IsU0FBUSxRQUFRO0lBR25ELFlBQVksTUFBVyxFQUFFLFVBQWtCLDBCQUEwQixFQUFFLE9BQWUsR0FBRztRQUN2RixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBZkQsMERBZUMiLCJmaWxlIjoiYmFzZS9iYXNlLXJlc3BvbnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JMb2dnZXIgfSBmcm9tIFwiLi4vbG9nZ2VyL2xvZ2dlclwiO1xuZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHsgfVxuXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VTdWNjZXNzIGV4dGVuZHMgUmVzcG9uc2Uge1xuICBwcml2YXRlIGNvZGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVzdWx0OiBhbnk7XG4gIGNvbnN0cnVjdG9yKHJlc3VsdDogYW55LCBtZXNzYWdlOiBzdHJpbmcgPSBcIlJlc3BvbnNlLlJlc3BvbnNlU3VjY2Vzc1wiLCBjb2RlOiBudW1iZXIgPSAyMDApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgfVxuICB0b0pTT04oKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgZGF0YTogdGhpcy5yZXN1bHRcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNwb25zZVBhcmFtc0Vycm9yIGV4dGVuZHMgUmVzcG9uc2Uge1xuICBwcml2YXRlIGNvZGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgZXJyb3JzOiBhbnlbXTtcblxuICBjb25zdHJ1Y3RvcihlcnJvcnM6IGFueVtdLCBtZXNzYWdlOiBzdHJpbmcgPSBcIlJlc3BvbnNlLlJlc3BvbnNlUGFyYW1zRXJyb3JcIiwgY29kZTogbnVtYmVyID0gNDIyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gIH1cblxuICB0b0pTT04oKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgZXJyb3JzOiB0aGlzLmVycm9yc1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlU2VydmljZUVycm9yIGV4dGVuZHMgUmVzcG9uc2Uge1xuICBwcml2YXRlIGNvZGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nID0gXCJSZXNwb25zZS5SZXNwb25zZVNlcnZpY2VFcnJvclwiLCBjb2RlOiBudW1iZXIgPSA1MDApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5tZXNzYWdlID0gXCLmnI3liqHlmajlh7rnjrDlvILluLjvvIFcIjtcbiAgICBFcnJvckxvZ2dlci5lcnJvcihtZXNzYWdlKTtcbiAgfVxuXG4gIHRvSlNPTigpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2VcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNwb25zZU5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBSZXNwb25zZSB7XG4gIHByaXZhdGUgY29kZTogbnVtYmVyO1xuICBwcml2YXRlIG1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcgPSBcIlJlc3BvbnNlLlJlc3BvbnNlTm90Rm91bmRFcnJvclwiLCBjb2RlOiBudW1iZXIgPSA0MDQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuXG4gIHRvSlNPTigpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2VcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNwb25zZU1pc3NpbmdUb2tlbkVycm9yIGV4dGVuZHMgUmVzcG9uc2Uge1xuICBwcml2YXRlIGNvZGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZyA9IFwiUmVzcG9uc2UuUmVzcG9uc2VNaXNzaW5nVG9rZW5FcnJvclwiLCBjb2RlOiBudW1iZXIgPSA0MDEpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuICBwdWJsaWMgdG9KU09OKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlTWlzc2luZ0xvZ2luRXJyb3IgZXh0ZW5kcyBSZXNwb25zZSB7XG4gIHByaXZhdGUgY29kZTogbnVtYmVyO1xuICBwcml2YXRlIG1lc3NhZ2U6IHN0cmluZztcbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nID0gXCJSZXNwb25zZS5SZXNwb25zZU1pc3NpbmdMb2dpbkVycm9yXCIsIGNvZGU6IG51bWJlciA9IDQwMDg2NjYpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuICBwdWJsaWMgdG9KU09OKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlU3VjY2Vzc05vUmVzdWx0IGV4dGVuZHMgUmVzcG9uc2Uge1xuICBwcml2YXRlIGNvZGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHJlc3VsdDogYW55LCBtZXNzYWdlOiBzdHJpbmcgPSBcIlJlc3BvbnNlLlJlc3BvbnNlU3VjY2Vzc1wiLCBjb2RlOiBudW1iZXIgPSAyMDApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgfVxuXG4gIHRvSlNPTigpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2VcbiAgICB9O1xuICB9XG59Il19
