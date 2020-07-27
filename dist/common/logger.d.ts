import { Logger } from "log4js";
declare let loginLogger: Logger;
declare let authLogger: Logger;
declare let operateLogger: Logger;
declare let appLogger: Logger;
declare let sqlLogger: Logger;
declare let requestLogger: Logger;
declare let errorLogger: Logger;
export { loginLogger as LoginLogger, authLogger as AuthLogger, operateLogger as OperateLogger, appLogger as AppLogger, sqlLogger as SQLLogger, requestLogger as RequestLogger, errorLogger as ErrorLogger };
