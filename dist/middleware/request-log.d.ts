/**
 * 中间件,请求的request日志处理
 * @author gaoqiang@gagogroup.com
 * @since 1.0.0
 * @version 2.0.0
 */
import { Request, Response, NextFunction } from "../base/base-express";
export declare function requestLog(req: Request, res: Response, next: NextFunction): void;
