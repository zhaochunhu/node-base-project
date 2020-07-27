/**
 * 中间件,跨域处理
 */

import {Request, Response, NextFunction} from "../base/base-express";

export function fetchOptions(req: Request, res: Response, next: NextFunction) {
  let reqAny: any = req.headers;
  res.header("Access-Control-Allow-Origin", reqAny.origin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("X-Content-Type-Options", "nosniff");
  res.header("X-XSS-Protection", "1");
  res.header("Access-Control-Allow-Headers", "x-requested-with, accept, origin, Content-Type, token, Accept, userToken");
  res.header("Access-Control-Expose-Headers", "userToken");
  res.header("X-Powered-By", " 3.2.1");
  res.header("P3P", "CP=CAO PSA OUR");

  /* 让options请求快速返回 */
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }
  else {
    next();
  }
}