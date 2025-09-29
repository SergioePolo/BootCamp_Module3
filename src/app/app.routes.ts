import { Routes } from '@angular/router';
import { Admin } from './pages/admin/admin';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { Products } from './pages/products/products';
import { Register } from './pages/register/register';

export const routes: Routes = [
    { path: 'home', component: Home, title:'Welcome' },
    { path: 'admin', component: Admin, title:'Admin Dashboard' },
    { path: 'login', component: Login, title:'Login' },
    { path: 'not_found', component: NotFound, title:'404 - Page not found' },
    { path: 'products', component: Products, title:'Products' },
    { path: 'register', component: Register, title:'Register user' },
];
