import { InjectionToken } from "@angular/core";
import { LoggerLevel } from "./logger.service";

export interface ILogger {
    log(lvl: LoggerLevel, msg: string): void;
}

export let LOGGER_SERVICE = new InjectionToken<ILogger>(
    "logger.service"
  );
