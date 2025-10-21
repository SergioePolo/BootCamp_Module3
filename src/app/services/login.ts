import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../interfaces/credentials';
import { environment } from '../../environments/environment';
import { jwtDecode } from 'jwt-decode';//Se usa con el objetivo de decodificar los tokens enviados por el back
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceLogin {
  //Inicializamos las dependencias que utilizaremos para la funcionalidad del login
  private _httpClient = inject(HttpClient);
  private _router = inject(Router);
  private apiURL = environment.appUrl;

  //Desarrollaremos la lógica funcional del inicio de sesion

  //Se debe realizar una peticion POST ya que debemos enviar información al back
  login(loginCredentials: Credentials) {
    return this._httpClient.post(`${this.apiURL}/login`, loginCredentials);
  }

  //Buscar el token que se almacena en el localStorage
  getToken() {
    return localStorage.getItem('token');//Obtenemos el token del navegador
  }

  //Validación del rol del token recibido desde el Backend
  roleValidation() {
    //Obtenenmos el token y lo asignamos a una variable para decodificarlo y validar el rol que tiene el usuario
    const token = this.getToken();

    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.admin === true ? true : false;
    }
    else {
      console.log('No se encontro token');
      return false;
    }
  }

  //Navegación a la página de incio dependiendo del rol del usuario
  loginNavigation() {
    if (this.roleValidation()) {
      this._router.navigate(['/dashboard']);
    }
    else {
      this._router.navigate(['/']);
    }
  }

  //Lógica para cerrar sesión
  logOut(){
    localStorage.removeItem('token');
    alert("Tu sesión se ha cerrado con éxito, esperamos verte pronto");
    this._router.navigate(['/login']);
  }

  //Método para validar si se tiene iniciada la sesión o no
  isLoggedIn(){
    return this.getToken() ? true : false;
  }
}

