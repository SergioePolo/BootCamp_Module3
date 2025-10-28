import { Component, inject, OnInit } from '@angular/core';
import { ServiceUsers } from '../../../services/users';
import { Users } from '../../../interfaces/users';
import Swal from 'sweetalert2';

//Las funciones de crear o actualizar usuario se debe realizar desde un formulario directamente

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './usersList.html',
  styleUrl: './usersLists.css'
})
export class UserList implements OnInit{
  //Inyección de dependencias e incialización de variables
  private _userService = inject(ServiceUsers);
  usersList : Users[] = [];

  //Controladores de formularios necesarios

  //Métodos funcionales para realizar peticiones al Back
  showUsers(){
    this._userService.searchUsers().subscribe({
      next:(res: any)=>{
        console.log(res);
        this.usersList = res.data;
        console.log(this.usersList);
      },
      error:(e:any)=>{
        console.log(e.error.msg);
      },
    })
  }

  removeUser(id: string){
    console.log('User to remove', id)
    this._userService.deleteUser(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        Swal.fire({
          title: 'User Deleted',
          text: res.msg,
          icon:'success'
        }).then(()=>{
          this.showUsers();
        })

      },
      error:(e:any)=>{
        console.log(e.error.msg);
        /* Swal.fire({
          title: 'There was a problem deleting the user',
          text: e.error.msg,
          icon:'error'
        }) */
      },
    })
  }

  uptadeUser(id: string){
    console.log('User to update', id) 
  }

  ngOnInit(): void {
    this.showUsers();
  }
}
