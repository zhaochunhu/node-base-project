"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLogger = exports.RequestLogger = exports.SQLLogger = exports.AppLogger = exports.OperateLogger = exports.AuthLogger = exports.LoginLogger = void 0;
const log4js = require("log4js");
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
let loginLogger = log4js.getLogger("LoginLogger");
exports.LoginLogger = loginLogger;
let authLogger = log4js.getLogger("AuthLogger");
exports.AuthLogger = authLogger;
let operateLogger = log4js.getLogger("OperateLogger");
exports.OperateLogger = operateLogger;
let appLogger = log4js.getLogger("AppLogger");
exports.AppLogger = appLogger;
let sqlLogger = log4js.getLogger("SQLLogger");
exports.SQLLogger = sqlLogger;
let requestLogger = log4js.getLogger("RequestLogger");
exports.RequestLogger = requestLogger;
let errorLogger = log4js.getLogger("ErrorLogger");
exports.ErrorLogger = errorLogger;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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IiwiZmlsZSI6ImxvZ2dlci9sb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsb2c0anMgZnJvbSBcImxvZzRqc1wiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCJsb2c0anNcIjtcblxuLypcbiog5pel5b+X5Lit6Ze05Lu2XG4qIOezu+e7n+aXpeW/l+WfuuS6jmxvZzRqc+WunueOsO+8jOaXpeW/l+WFqOmDqOiusOW9leWcqC4uL2xvZ3Pmlofku7blpLnkuItcbiog5pys57O757uf5YWx6K6w5b2V5aaC5LiL5Yeg56eN5pel5b+XOlxuKiAxLueZu+W9leaXpeW/lyzlrZjmlL5sb2dpbuaWh+S7tuWkuVxuKiAyLumdnuaOiOadg+iuv+mXruaTjeS9nOaXpeW/lyzlrZjmlL5hdXRo5paH5Lu25aS55LiLXG4qIDMu57O757uf5aKe5Yqg44CB5Yig6Zmk44CB5L+u5pS544CB5pWw5o2u5a+85Ye65pON5L2c5pel5b+XLOWtmOaUvuWcqG9wZXJhdGXmlofku7blpLnkuItcbiogNC7ns7vnu5/ml6Xlv5fvvIzlrZjmlL7lnKhhcHDmlofku7blpLnkuItcbiogNS5zcWzmiafooYzml6Xlv5fvvIzlrZjmlL7lnKhzcWzmlofku7blpLnkuItcbiogNi5hcGnor7fmsYLml6Xlv5fvvIzlrZjmlL7lnKhyZXF1ZXN05paH5Lu25aS55LiLXG4qXG4qXG4qICovXG5cblxubG9nNGpzLmNvbmZpZ3VyZSh7XG4gIGFwcGVuZGVyczogW1xuICAgIHtcbiAgICAgIHR5cGU6IFwiY29uc29sZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiTG9naW5Mb2dnZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJjb25zb2xlXCIsXG4gICAgICBjYXRlZ29yeTogXCJBdXRoTG9nZ2VyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwiY29uc29sZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiT3BlcmF0ZUxvZ2dlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcImNvbnNvbGVcIixcbiAgICAgIGNhdGVnb3J5OiBcIkFwcExvZ2dlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcImNvbnNvbGVcIixcbiAgICAgIGNhdGVnb3J5OiBcIlNRTExvZ2dlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcImNvbnNvbGVcIixcbiAgICAgIGNhdGVnb3J5OiBcIlJlcXVlc3RMb2dnZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJjb25zb2xlXCIsXG4gICAgICBjYXRlZ29yeTogXCJFcnJvckxvZ2dlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBjYXRlZ29yeTogXCJMb2dpbkxvZ2dlclwiLFxuICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICBmaWxlbmFtZTogXCIuLi8uLi9hcHBsb2cvbG9naW4vbG9naW4ubG9nXCIsXG4gICAgICBiYWNrdXBzOiA1LFxuICAgICAgbWF4TG9nU2l6ZTogNTI0Mjg4MFxuICAgIH0sXG4gICAge1xuICAgICAgY2F0ZWdvcnk6IFwiQXV0aExvZ2dlclwiLFxuICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICBmaWxlbmFtZTogXCIuLi8uLi9hcHBsb2cvYXV0aC9hdXRoLmxvZ1wiLFxuICAgICAgYmFja3VwczogNSxcbiAgICAgIG1heExvZ1NpemU6IDUyNDI4ODBcbiAgICB9LFxuICAgIHtcbiAgICAgIGNhdGVnb3J5OiBcIk9wZXJhdGVMb2dnZXJcIixcbiAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgZmlsZW5hbWU6IFwiLi4vLi4vYXBwbG9nL29wZXJhdGUvb3BlcmF0ZS5sb2dcIixcbiAgICAgIGJhY2t1cHM6IDUsXG4gICAgICBtYXhMb2dTaXplOiA1MjQyODgwXG4gICAgfSxcbiAgICB7XG4gICAgICBjYXRlZ29yeTogXCJBcHBMb2dnZXJcIixcbiAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgZmlsZW5hbWU6IFwiLi4vLi4vYXBwbG9nL2FwcC9hcHAubG9nXCIsXG4gICAgICBiYWNrdXBzOiA1LFxuICAgICAgbWF4TG9nU2l6ZTogNTI0Mjg4MFxuICAgIH0sXG4gICAge1xuICAgICAgY2F0ZWdvcnk6IFwiU1FMTG9nZ2VyXCIsXG4gICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgIGZpbGVuYW1lOiBcIi4uLy4uL2FwcGxvZy9zcWwvc3FsLmxvZ1wiLFxuICAgICAgYmFja3VwczogNSxcbiAgICAgIG1heExvZ1NpemU6IDUyNDI4ODBcbiAgICB9LFxuICAgIHtcbiAgICAgIGNhdGVnb3J5OiBcIlJlcXVlc3RMb2dnZXJcIixcbiAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgZmlsZW5hbWU6IFwiLi4vLi4vYXBwbG9nL3JlcXVlc3QvcmVxdWVzdC5sb2dcIixcbiAgICAgIGJhY2t1cHM6IDUsXG4gICAgICBtYXhMb2dTaXplOiA1MjQyODgwXG4gICAgfSxcbiAgICB7XG4gICAgICBjYXRlZ29yeTogXCJFcnJvckxvZ2dlclwiLFxuICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICBmaWxlbmFtZTogXCIuLi8uLi9hcHBsb2cvZXJyb3IvRXJyb3IubG9nXCIsXG4gICAgICBiYWNrdXBzOiA1LFxuICAgICAgbWF4TG9nU2l6ZTogNTI0Mjg4MFxuICAgIH1cbiAgXVxufSk7XG5cbmxldCBsb2dpbkxvZ2dlcjogTG9nZ2VyID0gbG9nNGpzLmdldExvZ2dlcihcIkxvZ2luTG9nZ2VyXCIpO1xubGV0IGF1dGhMb2dnZXI6IExvZ2dlciA9IGxvZzRqcy5nZXRMb2dnZXIoXCJBdXRoTG9nZ2VyXCIpO1xubGV0IG9wZXJhdGVMb2dnZXI6IExvZ2dlciA9IGxvZzRqcy5nZXRMb2dnZXIoXCJPcGVyYXRlTG9nZ2VyXCIpO1xubGV0IGFwcExvZ2dlcjogTG9nZ2VyID0gbG9nNGpzLmdldExvZ2dlcihcIkFwcExvZ2dlclwiKTtcbmxldCBzcWxMb2dnZXI6IExvZ2dlciA9IGxvZzRqcy5nZXRMb2dnZXIoXCJTUUxMb2dnZXJcIik7XG5sZXQgcmVxdWVzdExvZ2dlcjogTG9nZ2VyID0gbG9nNGpzLmdldExvZ2dlcihcIlJlcXVlc3RMb2dnZXJcIik7XG5sZXQgZXJyb3JMb2dnZXI6IExvZ2dlciA9IGxvZzRqcy5nZXRMb2dnZXIoXCJFcnJvckxvZ2dlclwiKTtcblxuZXhwb3J0IHtcbiAgbG9naW5Mb2dnZXIgYXMgTG9naW5Mb2dnZXIsXG4gIGF1dGhMb2dnZXIgYXMgIEF1dGhMb2dnZXIsXG4gIG9wZXJhdGVMb2dnZXIgYXMgIE9wZXJhdGVMb2dnZXIsXG4gIGFwcExvZ2dlciBhcyAgQXBwTG9nZ2VyLFxuICBzcWxMb2dnZXIgYXMgIFNRTExvZ2dlcixcbiAgcmVxdWVzdExvZ2dlciBhcyAgUmVxdWVzdExvZ2dlcixcbiAgZXJyb3JMb2dnZXIgYXMgIEVycm9yTG9nZ2VyXG59O1xuXG4iXX0=
