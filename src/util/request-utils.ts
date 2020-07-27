import {RequestParams} from "../types/interfaces";
import {Request} from "express";
import * as rp from "request-promise";
const imageDownloader = require("image-downloader");
let ip = require("ip");

export class RequestUtils {

  /*
  * 获取当前请求中的token
  * */
  static getTokenByReq(req: Request): string {
    try {
      return req.header("token")
        || req.query["token"]
        || req.body["token"]
        || req.params.token;
    } catch (err) {
      return null;
    }
  }

  /*
  * 获取当前请求中的ip地址
  * */
  static getIpByReq(req: Request): string | string [] {
    return req.headers["x-forwarded-for"]
      || req.connection.remoteAddress
      || req.socket.remoteAddress
      || req.connection.remoteAddress;
  }

  /*
  * 获取当前请求中的所有参数
  * */
  static getParamsByReq(req: Request): RequestParams {
    return Object.assign(req.query, req.params, req.body);
  }

  /*
  * 根据url请求数据
  * */
  static async request(url: string, qs: any): Promise<any> {
    let requestOptions: any = {
      method: "GET",
      uri: url,
      qs: qs,
      json: true
    };
    return await rp(requestOptions);
  }

  /*
  * 根据url请求数据
  * */
  static async downImage(options: { url: string, dest: string, headers?: {} }): Promise<void> {
    try {
      const {filename, image} = await imageDownloader.image(options);
      console.log("下载文件", filename);
      return filename;
    } catch (e) {
      console.error(e);
    }
  }

  /*
  * 获取本机ip
  * */
 static getIp(): string {
  return ip.address();
 }

}