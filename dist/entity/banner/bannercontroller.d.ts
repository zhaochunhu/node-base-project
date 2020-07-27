import * as express from "express";
export declare class BannerController {
    static findOne(request: any, response: express.Response, next: express.NextFunction): Promise<void>;
    static findAll(request: any, response: express.Response, next: express.NextFunction): Promise<void>;
    static create(request: any, response: express.Response, next: express.NextFunction): Promise<void>;
    static updateById(request: any, response: express.Response, next: express.NextFunction): Promise<void>;
    static deleteById(request: any, response: express.Response, next: express.NextFunction): Promise<void>;
}
