/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { provideHttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { MyLibComponent } from 'my-lib';
import { routes } from './app/main-routes';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { LOGGER_SERVICE } from './app/ilogger';
import { LoggerLevel, LoggerService, provideLogger } from './app/logger.service';

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(),
        provideRouter(routes, withComponentInputBinding()),
        provideLogger(LoggerLevel.ERROR)
    ]
})
    .catch(err => console.error(err));
