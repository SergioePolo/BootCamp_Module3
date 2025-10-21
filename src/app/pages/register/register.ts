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
    fullName: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl<number | null>(null),
    password: new FormControl(''),
  })

  handleSubmit(){
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
      error: (res:any)=>{
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: res.error.msg,
          confirmButtonText: 'Check again'
        })
      }
    })
  }
}
