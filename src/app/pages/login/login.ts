import { Component, inject } from '@angular/core';
//Para poder trabajar con formularios y poder recibir la información de los formularios se debe importar la directiva de Andular para trabajar con formularios
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../../interfaces/credentials';
import { ServiceLogin } from '../../services/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  //Angular agrupa todos formularios en un grupo con la función FormGroup que permite almancenar la información de un formulario sin importar la cantidad de elementos
  loginForm = new FormGroup({
    //La función FormControl esta encargada de almacenar la información en la variable definida
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  private _serviceLogin = inject(ServiceLogin);

  //Con esta función manejamos los eventos del sistema
  handleSubmit() {
  
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }
    
    const loginCredentials: Credentials = {
      email: this.loginForm.value.email || '',
      password: this.loginForm.value.password || ''
    }
    

    this._serviceLogin.login(loginCredentials).subscribe({
      //Aqui se recive la respuesta y se procesa con base a si es exitosa o fallida
      next: (res: any) =>{
        //Aqui se procesa si la respuesta no presenta un error
        localStorage.setItem('token', res.token);
        Swal.fire({
          title: 'Welcome',
          text: res.msg,
          icon: 'success',
          confirmButtonText:"Let's dive in"
        })
        this._serviceLogin.loginNavigation();
      },
      error: (err: any)=>{
        //Aqui se procesa si la respuesta retorna un error
        Swal.fire({
          title: 'Error',
          text: err.error.msg,
          icon: 'error',
          confirmButtonText: 'Check your information'
          
        })
      }
    });
  }
}
