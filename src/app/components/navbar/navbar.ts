import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { ServiceLogin } from '../../services/login';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  private _serviceLogin = inject(ServiceLogin);

  isroleValidation : boolean = this._serviceLogin.roleValidation();

}
