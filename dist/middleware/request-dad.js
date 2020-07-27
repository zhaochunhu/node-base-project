"use strict";
/**
 * 中间件,请求失败404处理
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestDad = void 0;
/*
* request 匹配不到路由 返回404
*
* */
function requestDad(req, res, next) {
    res.sendStatus(404);
}
exports.requestDad = requestDad;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvcmVxdWVzdC1kYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOzs7QUFJSDs7O0lBR0k7QUFDSixTQUFnQixVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtJQUN4RSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFGRCxnQ0FFQyIsImZpbGUiOiJtaWRkbGV3YXJlL3JlcXVlc3QtZGFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDkuK3pl7Tku7Ys6K+35rGC5aSx6LSlNDA05aSE55CGXG4gKi9cblxuaW1wb3J0IHtOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlfSBmcm9tIFwiLi4vYmFzZS9iYXNlLWV4cHJlc3NcIjtcblxuLypcbiogcmVxdWVzdCDljLnphY3kuI3liLDot6/nlLEg6L+U5ZueNDA0XG4qXG4qICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdERhZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICByZXMuc2VuZFN0YXR1cyg0MDQpO1xufVxuIl19
