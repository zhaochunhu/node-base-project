import * as express from "express";
import { ResponseSuccess, ResponseParamsError, ResponseServiceError } from "../../base/base-response";
export class UserController {
    public static async login(request: any, response: express.Response, next: express.NextFunction): Promise<void> {
        const username: string = request.body["username"];
        const password: string = request.body["password"];
        try {
            if (username === "tongtang" && password === "13764078944") {
                response.json(new ResponseSuccess({}));
            }
        } catch (err) {
            response.json(new ResponseServiceError(err.message));
            return;
        }
    }

}