import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';//Permite realizar peticiones HTTP en angular
import { authInterceptor } from './interceptors/auth-interceptor';//Permite utilizar eñ interceptor dentro de la aplicación

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),//Nos permite utilizar interceptores en todas nuestras peticiones
  ]
};
