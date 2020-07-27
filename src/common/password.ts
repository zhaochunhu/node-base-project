let crypto = require("crypto");
const config = require("config");
let salt = config.app.salt;

export class PasswordService {

    /**
     * 加密
     * @param mima
     * @returns {string}
     */
    public static cipher(password: string) {
        let encrypted = "";
        let cip = crypto.createCipher("aes-256-cbc", "zed");
        encrypted += cip.update(password, "utf-8", "hex");
        encrypted += cip.final("hex");
        return encrypted;
    }

    public static decipher(password: string) {
        let decipher = crypto.createDecipher("aes-256-cbc", "zed");
        let dec = decipher.update(password, "hex", "utf8");
        dec += decipher.final("utf8");
        return dec;
    }

    public static decipherSha256(password: string) {
        const sign = crypto.createSign("sha256").update(password);
        let dec = sign.sign("ddd", "hex");
        return dec;
    }

    public static decipherByBase64(password: string) {
        password = new Buffer(password, "base64").toString();
        return password.substring(0, password.indexOf(salt));
    }

    public static cipherDatabase(password: string) {
        let encrypted = "";
        let cip = crypto.createCipher("idea", "cpic");
        encrypted += cip.update(password, "utf-8", "hex");
        encrypted += cip.final("hex");
        return encrypted;
    }

    public static decipherDatabase(password: string) {
        let decipher = crypto.createDecipher("idea", "cpic");
        let dec = decipher.update(password, "hex", "utf8");
        dec += decipher.final("utf8");
        return dec;
    }
}

