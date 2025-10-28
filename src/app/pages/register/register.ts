import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Users } from '../../interfaces/users';
import { ServiceUsers } from '../../services/users';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private _userService = inject(ServiceUsers);
  private _router = inject(Router);

  registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    age: new FormControl<number | null>(null, [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  handleSubmit(){

    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }

    const userForm : Users = {
      _id: '',
      fullName: this.registerForm.value.fullName || '',
      userName: this.registerForm.value.userName || '',
      email: this.registerForm.value.email || '',
      age: this.registerForm.value.age || 0, 
      password: this.registerForm.value.password || '',
      role: 'user'
    }
    this._userService.createUser(userForm).subscribe({
      next: (res: any)=>{
        Swal.fire({
          title: 'Bienvenido',
          icon: 'success',
          text: res.msg,
        }).then(
          ()=>{
            this._router.navigate(['/login']);
          }
        )
      },
      error: (e:any)=>{
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: e.error.msg,
          confirmButtonText: 'Check again'
        })
      }
    })
  }
  validaciones(){
    //Validaciones propias para los formularios
  }
}
