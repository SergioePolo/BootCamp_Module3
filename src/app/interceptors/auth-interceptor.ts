//Todas las peticiones realizadas al servidor deben pasar por el interceptor donde este revisara si la petición necesita un token o no para adjuntarlo a la consulta
import { HttpInterceptorFn } from '@angular/common/http';
import { ServiceLogin } from '../services/login';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //req -> recibe la petición que se va a revisar y operar
  //next -> da continuidad al proceso normal de la petición y enviarla al Back

  //Se inicializan los imports para su uso en el la función
  const _serviceLogin = inject(ServiceLogin);
  //Se asigna el token a una variable para poder utilizarla
  const token = _serviceLogin.getToken();
  //Se almacena el token en el Header para poder enviarlo al Back
  //Se revisa si cuenta con token y en el caso de que no tiene token envia la petición directamente al back y Back revisaría si es necesario contar con token o no
  const request = token? req.clone({setHeaders:{Authorization: "Bearer " + token}}): req;
  //Envia es la petición configurada con el token dependiendo de la necesidad
  return next(request);
};
