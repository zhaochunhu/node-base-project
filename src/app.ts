import * as express from "express";
export let app: express.Application = express();

import { AppLogger} from "./base/logger";
// 所有路由都未匹配（404）
app.get("*", function (req, res, next) {
    res.json({msg: "helloworld"});
    res.sendStatus(404);
});
app.post("*", function (req, res, next) {
    res.sendStatus(404);
});
app.put("*", function (req, res, next) {
    res.sendStatus(404);
});
app.delete("*", function (req, res, next) {
    res.sendStatus(404);
});

//  程序启动
app.listen(3000, () => {
    console.info(`app start ${process.env.HOST_IP}:3000`);
});

// uncaughtException 避免程序崩溃
process.on("uncaughtException", function (err) {
    AppLogger.error("未知异常:" + err);
});

process.on("unhandledRejection", function (err, promise) {
    AppLogger.error("未知异常:", err, promise);
});