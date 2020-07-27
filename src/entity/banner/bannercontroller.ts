import * as express from "express";
import { ResponseSuccess, ResponseParamsError, ResponseServiceError } from "../../base/base-response";
export class BannerController {
    public static async findOne(request: any, response: express.Response, next: express.NextFunction): Promise<void> {

        try {
            response.json(new ResponseSuccess({}));
        } catch (err) {
            response.json(new ResponseServiceError(err.message));
            return;
        }
    }

    public static async findAll(request: any, response: express.Response, next: express.NextFunction): Promise<void> {

        try {
            response.json(new ResponseSuccess({}));
        } catch (err) {
            response.json(new ResponseServiceError(err.message));
            return;
        }
    }

    public static async create(request: any, response: express.Response, next: express.NextFunction): Promise<void> {

        try {
            response.json(new ResponseSuccess({}));
        } catch (err) {
            response.json(new ResponseServiceError(err.message));
            return;
        }
    }

    public static async updateById(request: any, response: express.Response, next: express.NextFunction): Promise<void> {

        try {
            response.json(new ResponseSuccess({}));
        } catch (err) {
            response.json(new ResponseServiceError(err.message));
            return;
        }
    }


    public static async deleteById(request: any, response: express.Response, next: express.NextFunction): Promise<void> {

        try {
            response.json(new ResponseSuccess({}));
        } catch (err) {
            response.json(new ResponseServiceError(err.message));
            return;
        }
    }
}