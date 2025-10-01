//Los servicios son la lógica accesible desde cualquier parte del proyecto

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ServiceProducts {
  //inyección de dependencias y/o directivas de Angular
  //Pérmite utilizar los métdos GET, POST, PUT Y DELETE
  //El guión bajo es una convención para identificar variables que son inyectadas en el sistema

  private _httpClient = inject(HttpClient);

  //Definir la ruta de acceso al back
  private apiURL = 'http://localhost:3000';

  //Métodos para realizar las peticiones al Back

  //POST
  createProduct(productToCreat: Products){
    return this._httpClient.post(this.apiURL + '/products', productToCreat);
  };

  //GET
  searchProducts(){
    return this._httpClient.get(this.apiURL + '/products');
  };

  //PUT
  //BODY - ProductToUpdate
  //PARAMS - id
  updateProducts(ProductToUpdate: Products, id: string){
    return this._httpClient.put(`${this.apiURL}/products/${id}`, ProductToUpdate);
  };

  //DELETE
  deleteProducts(id: string){
    return this._httpClient.delete(`${this.apiURL}/products/${id}`);
  };
}
