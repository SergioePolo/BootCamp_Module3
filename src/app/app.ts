import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../app/components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { ServiceLogin } from './services/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App{

  private _serviceLogin = inject(ServiceLogin);
  isVisible: boolean = this._serviceLogin.roleValidation();
  
}
