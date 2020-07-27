"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordService = void 0;
let crypto = require("crypto");
const config = require("config");
let salt = config.app.salt;
class PasswordService {
    /**
     * 加密
     * @param mima
     * @returns {string}
     */
    static cipher(password) {
        let encrypted = "";
        let cip = crypto.createCipher("aes-256-cbc", "zed");
        encrypted += cip.update(password, "utf-8", "hex");
        encrypted += cip.final("hex");
        return encrypted;
    }
    static decipher(password) {
        let decipher = crypto.createDecipher("aes-256-cbc", "zed");
        let dec = decipher.update(password, "hex", "utf8");
        dec += decipher.final("utf8");
        return dec;
    }
    static decipherSha256(password) {
        const sign = crypto.createSign("sha256").update(password);
        let dec = sign.sign("ddd", "hex");
        return dec;
    }
    static decipherByBase64(password) {
        password = new Buffer(password, "base64").toString();
        return password.substring(0, password.indexOf(salt));
    }
    static cipherDatabase(password) {
        let encrypted = "";
        let cip = crypto.createCipher("idea", "cpic");
        encrypted += cip.update(password, "utf-8", "hex");
        encrypted += cip.final("hex");
        return encrypted;
    }
    static decipherDatabase(password) {
        let decipher = crypto.createDecipher("idea", "cpic");
        let dec = decipher.update(password, "hex", "utf8");
        dec += decipher.final("utf8");
        return dec;
    }
}
exports.PasswordService = PasswordService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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byA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKFwiY29uZmlnXCIpO1xubGV0IHNhbHQgPSBjb25maWcuYXBwLnNhbHQ7XG5cbmV4cG9ydCBjbGFzcyBQYXNzd29yZFNlcnZpY2Uge1xuXG4gICAgLyoqXG4gICAgICog5Yqg5a+GXG4gICAgICogQHBhcmFtIG1pbWFcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY2lwaGVyKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGVuY3J5cHRlZCA9IFwiXCI7XG4gICAgICAgIGxldCBjaXAgPSBjcnlwdG8uY3JlYXRlQ2lwaGVyKFwiYWVzLTI1Ni1jYmNcIiwgXCJ6ZWRcIik7XG4gICAgICAgIGVuY3J5cHRlZCArPSBjaXAudXBkYXRlKHBhc3N3b3JkLCBcInV0Zi04XCIsIFwiaGV4XCIpO1xuICAgICAgICBlbmNyeXB0ZWQgKz0gY2lwLmZpbmFsKFwiaGV4XCIpO1xuICAgICAgICByZXR1cm4gZW5jcnlwdGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVjaXBoZXIocGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICBsZXQgZGVjaXBoZXIgPSBjcnlwdG8uY3JlYXRlRGVjaXBoZXIoXCJhZXMtMjU2LWNiY1wiLCBcInplZFwiKTtcbiAgICAgICAgbGV0IGRlYyA9IGRlY2lwaGVyLnVwZGF0ZShwYXNzd29yZCwgXCJoZXhcIiwgXCJ1dGY4XCIpO1xuICAgICAgICBkZWMgKz0gZGVjaXBoZXIuZmluYWwoXCJ1dGY4XCIpO1xuICAgICAgICByZXR1cm4gZGVjO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVjaXBoZXJTaGEyNTYocGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzaWduID0gY3J5cHRvLmNyZWF0ZVNpZ24oXCJzaGEyNTZcIikudXBkYXRlKHBhc3N3b3JkKTtcbiAgICAgICAgbGV0IGRlYyA9IHNpZ24uc2lnbihcImRkZFwiLCBcImhleFwiKTtcbiAgICAgICAgcmV0dXJuIGRlYztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlY2lwaGVyQnlCYXNlNjQocGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICBwYXNzd29yZCA9IG5ldyBCdWZmZXIocGFzc3dvcmQsIFwiYmFzZTY0XCIpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBwYXNzd29yZC5zdWJzdHJpbmcoMCwgcGFzc3dvcmQuaW5kZXhPZihzYWx0KSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjaXBoZXJEYXRhYmFzZShwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBlbmNyeXB0ZWQgPSBcIlwiO1xuICAgICAgICBsZXQgY2lwID0gY3J5cHRvLmNyZWF0ZUNpcGhlcihcImlkZWFcIiwgXCJjcGljXCIpO1xuICAgICAgICBlbmNyeXB0ZWQgKz0gY2lwLnVwZGF0ZShwYXNzd29yZCwgXCJ1dGYtOFwiLCBcImhleFwiKTtcbiAgICAgICAgZW5jcnlwdGVkICs9IGNpcC5maW5hbChcImhleFwiKTtcbiAgICAgICAgcmV0dXJuIGVuY3J5cHRlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlY2lwaGVyRGF0YWJhc2UocGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICBsZXQgZGVjaXBoZXIgPSBjcnlwdG8uY3JlYXRlRGVjaXBoZXIoXCJpZGVhXCIsIFwiY3BpY1wiKTtcbiAgICAgICAgbGV0IGRlYyA9IGRlY2lwaGVyLnVwZGF0ZShwYXNzd29yZCwgXCJoZXhcIiwgXCJ1dGY4XCIpO1xuICAgICAgICBkZWMgKz0gZGVjaXBoZXIuZmluYWwoXCJ1dGY4XCIpO1xuICAgICAgICByZXR1cm4gZGVjO1xuICAgIH1cbn1cblxuIl19
