import * as express from "express";
import * as bodyParser from "body-parser";
import * as sequelize from "sequelize";
import * as timeout from "connect-timeout";
import {v1} from "./routers/api/v1";
import { AppLogger } from "./logger/logger";
import { fetchOptions } from "./middleware/fetch-options";
import { requestTimeout } from "./middleware/request-timeout";
import { requestDad } from "./middleware/request-dad";
import { requestLog } from "./middleware/request-log";
const config = require("config");
const sequelizeConnction = require("./common/models")();


export let app: express.Application = express();
// 设置超时时间
app.use(timeout("600s"));
// 跨域快速返回
app.use(fetchOptions);
// 处理超时
app.use(requestTimeout);
// for parsing application/json
app.use(bodyParser.json({ limit: "10mb" }));
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// 业务路由
app.use("/api/v1", v1);
// 所有路由都未匹配（404）
app.use("*", requestDad);
// request log
app.use(requestLog);

//  程序启动
const globalAny: any = global;
globalAny.db = sequelizeConnction;
globalAny.db.query("select name from system where code = 'manage';", {type: sequelize.QueryTypes.SELECT})
    .then((data: any) => {
        app.listen(3000, () => {
            console.info(`app start ${process.env.HOST_IP}:3000`);
        });
    }, (err: any) => {
        console.error("数据库连接失败：", err);
    });


// uncaughtException 避免程序崩溃
process.on("uncaughtException", function (err) {
    AppLogger.error("未知异常:" + err);
});

process.on("unhandledRejection", function (err, promise) {
    AppLogger.error("未知异常:", err, promise);
});