import { RequestParams } from "../types/interfaces";
import { Request } from "express";
export declare class RequestUtils {
    static getTokenByReq(req: Request): string;
    static getIpByReq(req: Request): string | string[];
    static getParamsByReq(req: Request): RequestParams;
    static request(url: string, qs: any): Promise<any>;
    static downImage(options: {
        url: string;
        dest: string;
        headers?: {};
    }): Promise<void>;
    static getIp(): string;
}
