import { Component, inject, OnInit } from '@angular/core';
//IMPORTA LAS LLAMADAS A LA BASE DE DATOS PARA QUE LA INFORMACIÓN PUEDA SER VISIBLE EN EL COMPONENTE
import { ServiceProducts } from '../../services/products';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit{
  //inyeccion de dependencias y declaración de variables
  //Siempre que se desea crear la lógica de un archivo externo se debe inyectar el método importado
  _ServiceProducts = inject(ServiceProducts);

  //Listar todos los productos de la base de datos
  //La estructura e TypeScript nos exige que al momento de inicializar una variable se debe manejar la siguiente estructura variable : tipo(String, Number, Boolean,...) = valor;
  
  allProducts: Products[] = [];//Adigna un arreglo de productos a la variable allProducts que pretende alrmacenar todos los productos de la base de datos


  ShowProducts(){
    //Este método está encargado de realizar 
    // 1 - la petición get a la base de datos y traer su información
    // 2 - Almacenar los datos en una variable 
    // 3 - mostrarlos en el navegador

    this._ServiceProducts.searchProducts().subscribe({
      //Aquí se gestionan las respuestas del Back que pueden ser exitosas, advertencias y/o errores

      //Se gestionan las respuestas exitosas de la consulta
      next : (res: any) => {
        this.allProducts = res;
        console.log(this.allProducts);
      },
      //Se gestionan las respuestas de error de la consulta
      error: (error: any) => {
        console.error(error);
      }
    }); //El método subscribe es el encargado de gestionar las consultas a la base de datos siendo la conexión directa con el back
  }

  //Esta directiva de Angular tiene como función ejecutar acciones de primera vez en el navegador de manera automática
  ngOnInit(): void {
    this.ShowProducts();
  }
}
