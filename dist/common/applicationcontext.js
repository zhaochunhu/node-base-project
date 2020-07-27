"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationContext = void 0;
const fs = require("fs");
class ApplicationContext {
    init(env) {
        ApplicationContext.ENV = env;
        const config = JSON.parse(fs.readFileSync(`config/${env}.json`).toString());
        ApplicationContext.PORT = Number(config["application"]["port"]);
        ApplicationContext.GAGOPROXY = config["proxy"] || "";
        return this;
    }
    static getInstance() {
        return this.instance || (this.instance = new this());
    }
    static setInstance(app) {
        this.instance = app;
    }
    static getApplicationENV() {
        return ApplicationContext.ENV;
    }
    static getApplicationPort() {
        return ApplicationContext.PORT;
    }
    static getGagoProxy() {
        return ApplicationContext.GAGOPROXY;
    }
}
exports.ApplicationContext = ApplicationContext;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9hcHBsaWNhdGlvbmNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQXlCO0FBRXpCLE1BQWEsa0JBQWtCO0lBTzdCLElBQUksQ0FBQyxHQUFXO1FBQ2Qsa0JBQWtCLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUU3QixNQUFNLE1BQU0sR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakYsa0JBQWtCLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRSxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVyRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNLENBQUMsV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUF1QjtRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBRUQsTUFBTSxDQUFDLGlCQUFpQjtRQUN0QixPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBRUQsTUFBTSxDQUFDLGtCQUFrQjtRQUN2QixPQUFPLGtCQUFrQixDQUFDLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVk7UUFDakIsT0FBTyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztDQUVGO0FBckNELGdEQXFDQyIsImZpbGUiOiJjb21tb24vYXBwbGljYXRpb25jb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbkNvbnRleHQge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQXBwbGljYXRpb25Db250ZXh0O1xuXG4gIHByaXZhdGUgc3RhdGljIEVOVjogc3RyaW5nO1xuICBwcml2YXRlIHN0YXRpYyBQT1JUOiBudW1iZXI7XG4gIHByaXZhdGUgc3RhdGljIEdBR09QUk9YWTogc3RyaW5nO1xuXG4gIGluaXQoZW52OiBzdHJpbmcpOiBBcHBsaWNhdGlvbkNvbnRleHQge1xuICAgIEFwcGxpY2F0aW9uQ29udGV4dC5FTlYgPSBlbnY7XG5cbiAgICBjb25zdCBjb25maWc6IGFueSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGBjb25maWcvJHtlbnZ9Lmpzb25gKS50b1N0cmluZygpKTtcbiAgICBBcHBsaWNhdGlvbkNvbnRleHQuUE9SVCA9IE51bWJlcihjb25maWdbXCJhcHBsaWNhdGlvblwiXVtcInBvcnRcIl0pO1xuICAgIEFwcGxpY2F0aW9uQ29udGV4dC5HQUdPUFJPWFkgPSBjb25maWdbXCJwcm94eVwiXSB8fCBcIlwiO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXBwbGljYXRpb25Db250ZXh0IHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZSB8fCAodGhpcy5pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlKGFwcDogQXBwbGljYXRpb25Db250ZXh0KTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGFwcDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBcHBsaWNhdGlvbkVOVigpOiBzdHJpbmcge1xuICAgIHJldHVybiBBcHBsaWNhdGlvbkNvbnRleHQuRU5WO1xuICB9XG5cbiAgc3RhdGljIGdldEFwcGxpY2F0aW9uUG9ydCgpOiBudW1iZXIge1xuICAgIHJldHVybiBBcHBsaWNhdGlvbkNvbnRleHQuUE9SVDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRHYWdvUHJveHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQXBwbGljYXRpb25Db250ZXh0LkdBR09QUk9YWTtcbiAgfVxuXG59XG5cblxuIl19
