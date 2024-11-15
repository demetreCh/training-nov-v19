import { inject, Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { ILogger } from './ilogger';

export let LOG_LEVEL = new InjectionToken<LoggerLevel>(
  "log_level.value"
);

export function provideLogger(logLevel: LoggerLevel): Provider[] {
  return [
    { provide: LOG_LEVEL, useValue: logLevel },
    LoggerService

  ]
}

export enum LoggerLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR
}

@Injectable()
export class LoggerService implements ILogger {
  private loggerLevel: LoggerLevel = inject(LOG_LEVEL);

  log(lvl: LoggerLevel, msg: string): void {
    if (lvl < this.loggerLevel) return;
    switch (lvl) {
      case LoggerLevel.INFO:
        return console.info('%c' + msg, 'color: #6495ED');
      case LoggerLevel.WARN:
        return console.warn('%c' + msg, 'color: #FF8C00');
      case LoggerLevel.ERROR:
        return console.error('%c' + msg, 'color: #DC143C');
      default:
        console.log('debug : ' + msg);
    }
  }
}
