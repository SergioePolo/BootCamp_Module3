import { Component } from '@angular/core';
//Para poder trabajar con formularios y poder recibir la información de los formularios se debe importar la directiva de Andular para trabajar con formularios
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../../interfaces/credentials';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  //Angular agrupa todos formularios en un grupo con la función FormGroup que permite almancenar la información de un formulario sin importar la cantidad de elementos
  loginForm = new FormGroup ({
    //La función FormControl esta encargada de almacenar la información en la variable definida
    email: new FormControl(''),
    password: new FormControl('')
  })

  //Con esta función manejamos los eventos del sistema
  handleSubmit(){
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    console.log(email, password);
    /* const loginCredentials: Credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    console.log('Credenciales del Login', loginCredentials); */

  }

}
