"use strict";
/**
 * 中间件,请求超时处理
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestTimeout = void 0;
/*
* request 超时
*
* */
function requestTimeout(req, res, next) {
    if (!req.timedout)
        next();
}
exports.requestTimeout = requestTimeout;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvcmVxdWVzdC10aW1lb3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7O0FBSUg7OztJQUdJO0FBQ0osU0FBZ0IsY0FBYyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDNUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRO1FBQUUsSUFBSSxFQUFFLENBQUM7QUFDNUIsQ0FBQztBQUZELHdDQUVDIiwiZmlsZSI6Im1pZGRsZXdhcmUvcmVxdWVzdC10aW1lb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDkuK3pl7Tku7Ys6K+35rGC6LaF5pe25aSE55CGXG4gKi9cblxuaW1wb3J0IHtOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlfSBmcm9tIFwiLi4vYmFzZS9iYXNlLWV4cHJlc3NcIjtcblxuLypcbiogcmVxdWVzdCDotoXml7ZcbipcbiogKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0VGltZW91dChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICBpZiAoIXJlcS50aW1lZG91dCkgbmV4dCgpO1xufVxuIl19
