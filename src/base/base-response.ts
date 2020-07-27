import { ErrorLogger } from "../logger/logger";
export class Response { }

export class ResponseSuccess extends Response {
  private code: number;
  private message: string;
  private result: any;
  constructor(result: any, message: string = "Response.ResponseSuccess", code: number = 200) {
    super();
    this.message = message;
    this.result = result;
    this.code = code;
  }
  toJSON(): any {
    return {
      code: this.code,
      message: this.message,
      data: this.result
    };
  }
}

export class ResponseParamsError extends Response {
  private code: number;
  private message: string;
  private errors: any[];

  constructor(errors: any[], message: string = "Response.ResponseParamsError", code: number = 422) {
    super();
    this.code = code;
    this.message = message;
    this.errors = errors;
  }

  toJSON(): any {
    return {
      code: this.code,
      message: this.message,
      errors: this.errors
    };
  }
}

export class ResponseServiceError extends Response {
  private code: number;
  private message: string;

  constructor(message: string = "Response.ResponseServiceError", code: number = 500) {
    super();
    this.code = code;
    this.message = "服务器出现异常！";
    ErrorLogger.error(message);
  }

  toJSON(): any {
    return {
      code: this.code,
      message: this.message
    };
  }
}

export class ResponseNotFoundError extends Response {
  private code: number;
  private message: string;

  constructor(message: string = "Response.ResponseNotFoundError", code: number = 404) {
    super();
    this.code = code;
    this.message = message;
  }

  toJSON(): any {
    return {
      code: this.code,
      message: this.message
    };
  }
}

export class ResponseMissingTokenError extends Response {
  private code: number;
  private message: string;
  constructor(message: string = "Response.ResponseMissingTokenError", code: number = 401) {
    super();
    this.code = code;
    this.message = message;
  }
  public toJSON(): any {
    return {
      code: this.code,
      message: this.message
    };
  }
}

export class ResponseMissingLoginError extends Response {
  private code: number;
  private message: string;
  constructor(message: string = "Response.ResponseMissingLoginError", code: number = 4008666) {
    super();
    this.code = code;
    this.message = message;
  }
  public toJSON(): any {
    return {
      code: this.code,
      message: this.message
    };
  }
}

export class ResponseSuccessNoResult extends Response {
  private code: number;
  private message: string;
  constructor(result: any, message: string = "Response.ResponseSuccess", code: number = 200) {
    super();
    this.message = message;
    this.code = code;
  }

  toJSON(): any {
    return {
      code: this.code,
      message: this.message
    };
  }
}