/**
 * 中间件,请求超时处理
 */
import { NextFunction, Request, Response } from "../base/base-express";
export declare function requestTimeout(req: Request, res: Response, next: NextFunction): void;
