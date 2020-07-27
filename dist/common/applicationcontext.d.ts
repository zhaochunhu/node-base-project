export declare class ApplicationContext {
    private static instance;
    private static ENV;
    private static PORT;
    private static GAGOPROXY;
    init(env: string): ApplicationContext;
    static getInstance(): ApplicationContext;
    static setInstance(app: ApplicationContext): void;
    static getApplicationENV(): string;
    static getApplicationPort(): number;
    static getGagoProxy(): string;
}
