"use strict";
/**
 * 中间件,跨域处理
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchOptions = void 0;
function fetchOptions(req, res, next) {
    let reqAny = req.headers;
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
exports.fetchOptions = fetchOptions;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvZmV0Y2gtb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7OztBQUlILFNBQWdCLFlBQVksQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQzFFLElBQUksTUFBTSxHQUFRLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQ0FBa0MsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxHQUFHLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hELEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwQyxHQUFHLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLDBFQUEwRSxDQUFDLENBQUM7SUFDdkgsR0FBRyxDQUFDLE1BQU0sQ0FBQywrQkFBK0IsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6RCxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXBDLG9CQUFvQjtJQUNwQixJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQzVCLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsT0FBTztLQUNSO1NBQ0k7UUFDSCxJQUFJLEVBQUUsQ0FBQztLQUNSO0FBQ0gsQ0FBQztBQXBCRCxvQ0FvQkMiLCJmaWxlIjoibWlkZGxld2FyZS9mZXRjaC1vcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDkuK3pl7Tku7Ys6Leo5Z+f5aSE55CGXG4gKi9cblxuaW1wb3J0IHtSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9ufSBmcm9tIFwiLi4vYmFzZS9iYXNlLWV4cHJlc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoT3B0aW9ucyhyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICBsZXQgcmVxQW55OiBhbnkgPSByZXEuaGVhZGVycztcbiAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCByZXFBbnkub3JpZ2luKTtcbiAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCIsIFwidHJ1ZVwiKTtcbiAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIiwgXCJHRVQsIFBPU1RcIik7XG4gIHJlcy5oZWFkZXIoXCJYLUNvbnRlbnQtVHlwZS1PcHRpb25zXCIsIFwibm9zbmlmZlwiKTtcbiAgcmVzLmhlYWRlcihcIlgtWFNTLVByb3RlY3Rpb25cIiwgXCIxXCIpO1xuICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiLCBcIngtcmVxdWVzdGVkLXdpdGgsIGFjY2VwdCwgb3JpZ2luLCBDb250ZW50LVR5cGUsIHRva2VuLCBBY2NlcHQsIHVzZXJUb2tlblwiKTtcbiAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUV4cG9zZS1IZWFkZXJzXCIsIFwidXNlclRva2VuXCIpO1xuICByZXMuaGVhZGVyKFwiWC1Qb3dlcmVkLUJ5XCIsIFwiIDMuMi4xXCIpO1xuICByZXMuaGVhZGVyKFwiUDNQXCIsIFwiQ1A9Q0FPIFBTQSBPVVJcIik7XG5cbiAgLyog6K6pb3B0aW9uc+ivt+axguW/q+mAn+i/lOWbniAqL1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJPUFRJT05TXCIpIHtcbiAgICByZXMuc2VuZFN0YXR1cygyMDQpO1xuICAgIHJldHVybjtcbiAgfVxuICBlbHNlIHtcbiAgICBuZXh0KCk7XG4gIH1cbn0iXX0=
