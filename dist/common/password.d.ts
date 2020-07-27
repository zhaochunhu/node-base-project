export declare class PasswordService {
    /**
     * 加密
     * @param mima
     * @returns {string}
     */
    static cipher(password: string): string;
    static decipher(password: string): any;
    static decipherSha256(password: string): any;
    static decipherByBase64(password: string): string;
    static cipherDatabase(password: string): string;
    static decipherDatabase(password: string): any;
}
