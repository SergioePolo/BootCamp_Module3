import { Routes } from '@angular/router';
import { Admin } from './pages/admin/admin';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { Products } from './pages/products/products';
import { Register } from './pages/register/register';
//Para poder utilizar el guardian y revisar si el usuario tiene la posiblidad de acceder a la ruta se de be importar la clase guard para poder utilizarla
import { authGuard } from './guards/auth-guard';
import { Inventory } from './pages/admin/inventory/inventory';
import { UserList } from './pages/admin/usersList/usersList';

export const routes: Routes = [
    { path: '', component: Home, title:'Welcome' },
    { path: 'dashboard', 
        component: Admin, 
        title:'Admin Dashboard', 
        canActivate: [authGuard],
        canActivateChild:[authGuard],
        children:[
            {path: '', component: UserList},
            {path: 'inventory', component: Inventory},
        ]
    },
    { path: 'login', component: Login, title:'Login' },
    { path: 'products', component: Products, title:'Products' },
    { path: 'register', component: Register, title:'Register user' },
    { path: '**', component: NotFound, title:'404 - Page not found' },
];
