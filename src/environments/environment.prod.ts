import { NgxLoggerLevel } from "ngx-logger";

export const environment = {
  production: true,
  apiBase: "http://localhost:4200/assets/data/",
  apiLog: "",
  logLevel: NgxLoggerLevel.WARN,
  serverLogLevel: NgxLoggerLevel.LOG
};
