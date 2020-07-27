/**
 * 中间件,请求失败404处理
 */
import { NextFunction, Request, Response } from "../base/base-express";
export declare function requestDad(req: Request, res: Response, next: NextFunction): void;
