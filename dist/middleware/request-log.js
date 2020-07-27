"use strict";
/**
 * 中间件,请求的request日志处理
 * @author gaoqiang@gagogroup.com
 * @since 1.0.0
 * @version 2.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLog = void 0;
const logger_1 = require("../logger/logger");
const request_utils_1 = require("../util/request-utils");
/*
* request 日志记录
* 记录内容包含:
* method
* url
*
* */
function requestLog(req, res, next) {
    let params = request_utils_1.RequestUtils.getParamsByReq(req);
    let reqIP = request_utils_1.RequestUtils.getIpByReq(req);
    if (req.url !== "/favicon.ico" && req.method !== "head") {
        logger_1.RequestLogger.info(`[${req.method.toString()}] ${req.url} from ${reqIP}`, {
            url: req.url,
            fromIP: reqIP,
            body: JSON.stringify(params)
        });
    }
    next();
    return;
}
exports.requestLog = requestLog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvcmVxdWVzdC1sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOzs7QUFFSCw2Q0FBK0M7QUFFL0MseURBQW1EO0FBR25EOzs7Ozs7SUFNSTtBQUNKLFNBQWdCLFVBQVUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQ3hFLElBQUksTUFBTSxHQUFrQiw0QkFBWSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3RCxJQUFJLEtBQUssR0FBdUIsNEJBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0QsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLGNBQWMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN2RCxzQkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssR0FBRyxDQUFDLEdBQUcsU0FBUyxLQUFLLEVBQUUsRUFBRTtZQUN4RSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7WUFDWixNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDSjtJQUNELElBQUksRUFBRSxDQUFDO0lBQ1AsT0FBTztBQUNULENBQUM7QUFaRCxnQ0FZQyIsImZpbGUiOiJtaWRkbGV3YXJlL3JlcXVlc3QtbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDkuK3pl7Tku7Ys6K+35rGC55qEcmVxdWVzdOaXpeW/l+WkhOeQhlxuICogQGF1dGhvciBnYW9xaWFuZ0BnYWdvZ3JvdXAuY29tXG4gKiBAc2luY2UgMS4wLjBcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKi9cblxuaW1wb3J0IHtSZXF1ZXN0TG9nZ2VyfSBmcm9tIFwiLi4vbG9nZ2VyL2xvZ2dlclwiO1xuaW1wb3J0IHtSZXF1ZXN0UGFyYW1zfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHtSZXF1ZXN0VXRpbHN9IGZyb20gXCIuLi91dGlsL3JlcXVlc3QtdXRpbHNcIjtcbmltcG9ydCB7UmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbn0gZnJvbSBcIi4uL2Jhc2UvYmFzZS1leHByZXNzXCI7XG5cbi8qXG4qIHJlcXVlc3Qg5pel5b+X6K6w5b2VXG4qIOiusOW9leWGheWuueWMheWQqzpcbiogbWV0aG9kXG4qIHVybFxuKlxuKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RMb2cocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgbGV0IHBhcmFtczogUmVxdWVzdFBhcmFtcyA9IFJlcXVlc3RVdGlscy5nZXRQYXJhbXNCeVJlcShyZXEpO1xuICBsZXQgcmVxSVA6IHN0cmluZyB8IHN0cmluZyBbXSA9IFJlcXVlc3RVdGlscy5nZXRJcEJ5UmVxKHJlcSk7XG4gIGlmIChyZXEudXJsICE9PSBcIi9mYXZpY29uLmljb1wiICYmIHJlcS5tZXRob2QgIT09IFwiaGVhZFwiKSB7XG4gICAgUmVxdWVzdExvZ2dlci5pbmZvKGBbJHtyZXEubWV0aG9kLnRvU3RyaW5nKCl9XSAke3JlcS51cmx9IGZyb20gJHtyZXFJUH1gLCB7XG4gICAgICB1cmw6IHJlcS51cmwsXG4gICAgICBmcm9tSVA6IHJlcUlQLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgIH0pO1xuICB9XG4gIG5leHQoKTtcbiAgcmV0dXJuO1xufVxuXG4iXX0=
