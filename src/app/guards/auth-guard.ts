import { CanActivateFn } from '@angular/router';
import { ServiceLogin } from '../services/login';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

//La función de los guards es apra proger las rutas y contenido del front para usuarios que no tengan 
//la función CanActivate -> se encarga de protejer rutas: Puede ser true or false
// true -> Paso la validación y puede mostrar el contenido
//false -> No paso la validación y prohible el mostrar el contenido
export const authGuard: CanActivateFn = (route, state) => {

  const _serviceLogin = inject(ServiceLogin);
  const _router = inject(Router);

  //Validación para el inicio de sesión
  if(!_serviceLogin.isLoggedIn()){
    //En el aso de que no haya iniciado sesión debe navegar a la carpeta de Login para iniciar sesión
    alert('No haz iniciado sesión, inicia tu sesión para poder accerder al sistema');
    _router.navigate(['/login']);
    return false;
  }
  
  //Validación del rol del usuario
  if(!_serviceLogin.roleValidation()){
    //En el caso de que el rol no permita acceder a la ventana en específico bloquea el ingreso a la ventana y lo redirecciona a la ventana inicial
    alert('No puedes acceder a está página, si crees que es un error contacta con el administrador del sistema');
    _router.navigate(['/']);
    return false;
  }

  return true;
};
