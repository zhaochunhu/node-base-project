"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUtils = void 0;
const rp = require("request-promise");
const imageDownloader = require("image-downloader");
let ip = require("ip");
class RequestUtils {
    /*
    * 获取当前请求中的token
    * */
    static getTokenByReq(req) {
        try {
            return req.header("token")
                || req.query["token"]
                || req.body["token"]
                || req.params.token;
        }
        catch (err) {
            return null;
        }
    }
    /*
    * 获取当前请求中的ip地址
    * */
    static getIpByReq(req) {
        return req.headers["x-forwarded-for"]
            || req.connection.remoteAddress
            || req.socket.remoteAddress
            || req.connection.remoteAddress;
    }
    /*
    * 获取当前请求中的所有参数
    * */
    static getParamsByReq(req) {
        return Object.assign(req.query, req.params, req.body);
    }
    /*
    * 根据url请求数据
    * */
    static request(url, qs) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestOptions = {
                method: "GET",
                uri: url,
                qs: qs,
                json: true
            };
            return yield rp(requestOptions);
        });
    }
    /*
    * 根据url请求数据
    * */
    static downImage(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { filename, image } = yield imageDownloader.image(options);
                console.log("下载文件", filename);
                return filename;
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    /*
    * 获取本机ip
    * */
    static getIp() {
        return ip.address();
    }
}
exports.RequestUtils = RequestUtils;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvcmVxdWVzdC11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxzQ0FBc0M7QUFDdEMsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDcEQsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXZCLE1BQWEsWUFBWTtJQUV2Qjs7UUFFSTtJQUNKLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBWTtRQUMvQixJQUFJO1lBQ0YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzttQkFDckIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7bUJBQ2xCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO21CQUNqQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN2QjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRDs7UUFFSTtJQUNKLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBWTtRQUM1QixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7ZUFDaEMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxhQUFhO2VBQzVCLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYTtlQUN4QixHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7O1FBRUk7SUFDSixNQUFNLENBQUMsY0FBYyxDQUFDLEdBQVk7UUFDaEMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOztRQUVJO0lBQ0osTUFBTSxDQUFPLE9BQU8sQ0FBQyxHQUFXLEVBQUUsRUFBTzs7WUFDdkMsSUFBSSxjQUFjLEdBQVE7Z0JBQ3hCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEVBQUUsRUFBRSxFQUFFO2dCQUNOLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQztZQUNGLE9BQU8sTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRUQ7O1FBRUk7SUFDSixNQUFNLENBQU8sU0FBUyxDQUFDLE9BQW9EOztZQUN6RSxJQUFJO2dCQUNGLE1BQU0sRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFDLEdBQUcsTUFBTSxlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxRQUFRLENBQUM7YUFDakI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQztLQUFBO0lBRUQ7O1FBRUk7SUFDTCxNQUFNLENBQUMsS0FBSztRQUNYLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FFRDtBQWxFRCxvQ0FrRUMiLCJmaWxlIjoidXRpbC9yZXF1ZXN0LXV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZXF1ZXN0UGFyYW1zfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHtSZXF1ZXN0fSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgcnAgZnJvbSBcInJlcXVlc3QtcHJvbWlzZVwiO1xuY29uc3QgaW1hZ2VEb3dubG9hZGVyID0gcmVxdWlyZShcImltYWdlLWRvd25sb2FkZXJcIik7XG5sZXQgaXAgPSByZXF1aXJlKFwiaXBcIik7XG5cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0VXRpbHMge1xuXG4gIC8qXG4gICog6I635Y+W5b2T5YmN6K+35rGC5Lit55qEdG9rZW5cbiAgKiAqL1xuICBzdGF0aWMgZ2V0VG9rZW5CeVJlcShyZXE6IFJlcXVlc3QpOiBzdHJpbmcge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gcmVxLmhlYWRlcihcInRva2VuXCIpXG4gICAgICAgIHx8IHJlcS5xdWVyeVtcInRva2VuXCJdXG4gICAgICAgIHx8IHJlcS5ib2R5W1widG9rZW5cIl1cbiAgICAgICAgfHwgcmVxLnBhcmFtcy50b2tlbjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICog6I635Y+W5b2T5YmN6K+35rGC5Lit55qEaXDlnLDlnYBcbiAgKiAqL1xuICBzdGF0aWMgZ2V0SXBCeVJlcShyZXE6IFJlcXVlc3QpOiBzdHJpbmcgfCBzdHJpbmcgW10ge1xuICAgIHJldHVybiByZXEuaGVhZGVyc1tcIngtZm9yd2FyZGVkLWZvclwiXVxuICAgICAgfHwgcmVxLmNvbm5lY3Rpb24ucmVtb3RlQWRkcmVzc1xuICAgICAgfHwgcmVxLnNvY2tldC5yZW1vdGVBZGRyZXNzXG4gICAgICB8fCByZXEuY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzO1xuICB9XG5cbiAgLypcbiAgKiDojrflj5blvZPliY3or7fmsYLkuK3nmoTmiYDmnInlj4LmlbBcbiAgKiAqL1xuICBzdGF0aWMgZ2V0UGFyYW1zQnlSZXEocmVxOiBSZXF1ZXN0KTogUmVxdWVzdFBhcmFtcyB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocmVxLnF1ZXJ5LCByZXEucGFyYW1zLCByZXEuYm9keSk7XG4gIH1cblxuICAvKlxuICAqIOagueaNrnVybOivt+axguaVsOaNrlxuICAqICovXG4gIHN0YXRpYyBhc3luYyByZXF1ZXN0KHVybDogc3RyaW5nLCBxczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgcmVxdWVzdE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIHVyaTogdXJsLFxuICAgICAgcXM6IHFzLFxuICAgICAganNvbjogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIGF3YWl0IHJwKHJlcXVlc3RPcHRpb25zKTtcbiAgfVxuXG4gIC8qXG4gICog5qC55o2udXJs6K+35rGC5pWw5o2uXG4gICogKi9cbiAgc3RhdGljIGFzeW5jIGRvd25JbWFnZShvcHRpb25zOiB7IHVybDogc3RyaW5nLCBkZXN0OiBzdHJpbmcsIGhlYWRlcnM/OiB7fSB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtmaWxlbmFtZSwgaW1hZ2V9ID0gYXdhaXQgaW1hZ2VEb3dubG9hZGVyLmltYWdlKG9wdGlvbnMpO1xuICAgICAgY29uc29sZS5sb2coXCLkuIvovb3mlofku7ZcIiwgZmlsZW5hbWUpO1xuICAgICAgcmV0dXJuIGZpbGVuYW1lO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgKiDojrflj5bmnKzmnLppcFxuICAqICovXG4gc3RhdGljIGdldElwKCk6IHN0cmluZyB7XG4gIHJldHVybiBpcC5hZGRyZXNzKCk7XG4gfVxuXG59Il19
