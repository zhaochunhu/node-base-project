import * as fs from "fs";

export class ApplicationContext {
  private static instance: ApplicationContext;

  private static ENV: string;
  private static PORT: number;
  private static GAGOPROXY: string;

  init(env: string): ApplicationContext {
    ApplicationContext.ENV = env;

    const config: any = JSON.parse(fs.readFileSync(`config/${env}.json`).toString());
    ApplicationContext.PORT = Number(config["application"]["port"]);
    ApplicationContext.GAGOPROXY = config["proxy"] || "";

    return this;
  }

  static getInstance(): ApplicationContext {
    return this.instance || (this.instance = new this());
  }

  static setInstance(app: ApplicationContext): void {
    this.instance = app;
  }

  static getApplicationENV(): string {
    return ApplicationContext.ENV;
  }

  static getApplicationPort(): number {
    return ApplicationContext.PORT;
  }

  static getGagoProxy(): string {
    return ApplicationContext.GAGOPROXY;
  }

}


