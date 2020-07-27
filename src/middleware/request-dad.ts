/**
 * 中间件,请求失败404处理
 */

import {NextFunction, Request, Response} from "../base/base-express";

/*
* request 匹配不到路由 返回404
*
* */
export function requestDad(req: Request, res: Response, next: NextFunction) {
  res.sendStatus(404);
}
