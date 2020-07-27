/**
 * 中间件,跨域处理
 */
import { Request, Response, NextFunction } from "../base/base-express";
export declare function fetchOptions(req: Request, res: Response, next: NextFunction): void;
