import * as log4js from "log4js";
import {Logger} from "log4js";

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
*
* */


log4js.configure({
  appenders: [
    {
      type: "console",
      category: "LoginLogger"
    },
    {
      type: "console",
      category: "AuthLogger"
    },
    {
      type: "console",
      category: "OperateLogger"
    },
    {
      type: "console",
      category: "AppLogger"
    },
    {
      type: "console",
      category: "SQLLogger"
    },
    {
      type: "console",
      category: "RequestLogger"
    },
    {
      type: "console",
      category: "ErrorLogger"
    },
    {
      category: "LoginLogger",
      type: "file",
      filename: "../../applog/login/login.log",
      backups: 5,
      maxLogSize: 5242880
    },
    {
      category: "AuthLogger",
      type: "file",
      filename: "../../applog/auth/auth.log",
      backups: 5,
      maxLogSize: 5242880
    },
    {
      category: "OperateLogger",
      type: "file",
      filename: "../../applog/operate/operate.log",
      backups: 5,
      maxLogSize: 5242880
    },
    {
      category: "AppLogger",
      type: "file",
      filename: "../../applog/app/app.log",
      backups: 5,
      maxLogSize: 5242880
    },
    {
      category: "SQLLogger",
      type: "file",
      filename: "../../applog/sql/sql.log",
      backups: 5,
      maxLogSize: 5242880
    },
    {
      category: "RequestLogger",
      type: "file",
      filename: "../../applog/request/request.log",
      backups: 5,
      maxLogSize: 5242880
    },
    {
      category: "ErrorLogger",
      type: "file",
      filename: "../../applog/error/Error.log",
      backups: 5,
      maxLogSize: 5242880
    }
  ]
});

let loginLogger: Logger = log4js.getLogger("LoginLogger");
let authLogger: Logger = log4js.getLogger("AuthLogger");
let operateLogger: Logger = log4js.getLogger("OperateLogger");
let appLogger: Logger = log4js.getLogger("AppLogger");
let sqlLogger: Logger = log4js.getLogger("SQLLogger");
let requestLogger: Logger = log4js.getLogger("RequestLogger");
let errorLogger: Logger = log4js.getLogger("ErrorLogger");

export {
  loginLogger as LoginLogger,
  authLogger as  AuthLogger,
  operateLogger as  OperateLogger,
  appLogger as  AppLogger,
  sqlLogger as  SQLLogger,
  requestLogger as  RequestLogger,
  errorLogger as  ErrorLogger
};

