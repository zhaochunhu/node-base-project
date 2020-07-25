import {
  ConsoleAppender,
  DateFileAppender,
  getLogger,
  Logger,
} from "log4js";
import * as log4js from "log4js";

/*
* 日志中间件
* 系统日志基于log4js实现，日志全部记录在../logs文件夹下
* 本系统共记录如下几种日志:
* 1.登录日志,存放login文件夹
* 2.非授权访问操作日志,存放auth文件夹下
* 3.系统增加、删除、修改、数据导出操作日志,存放在operate文件夹下
* 4.系统日志，存放在app文件夹下
* 5.sql执行日志，存放在sql文件夹下
* 6.api请求日志，存放在request文件夹下
*
* */

let logger: Logger = getLogger();
let auditLogger: Logger = getLogger("audit");
let loginLogger: Logger = getLogger("login");
let authLogger: Logger = getLogger("auth");
let operateLogger: Logger = getLogger("operate");
let appLogger: Logger = getLogger("app");
let sqlLogger: Logger = getLogger("sql");
let requestLogger: Logger = getLogger("request");
let exceptionLogger: Logger = getLogger("exception");

export {
  logger as Logger,
  auditLogger as AuditLogger,
  loginLogger as LoginLogger,
  authLogger as AuthLogger,
  operateLogger as OperateLogger,
  appLogger as AppLogger,
  sqlLogger as SQLLogger,
  requestLogger as RequestLogger,
  exceptionLogger as ExceptionLogger
};

