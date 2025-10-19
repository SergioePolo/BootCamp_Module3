import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerForm = new FormGroup({
    fullName: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl<number | null>(null),
    password: new FormControl(''),
  })

  handleSubmit(){
    const FullName = this.registerForm.value.fullName;
    const userName = this.registerForm.value.userName;
    const email = this.registerForm.value.email;
    const age = this.registerForm.value.age;
    const password = this.registerForm.value.password;
    console.log(FullName, userName, email, age, password)
  }
}
