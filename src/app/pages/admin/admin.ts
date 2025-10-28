import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ServiceLogin } from '../../services/login';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  private _loginService = inject(ServiceLogin);

  logout(){
    this._loginService.logOut();
  }
}
