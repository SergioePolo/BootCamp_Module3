//Los servicios son la lógica accesible desde cualquier parte del proyecto

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces/products';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceProducts {
  //inyección de dependencias y/o directivas de Angular
  //Pérmite utilizar los métdos GET, POST, PUT Y DELETE
  //El guión bajo es una convención para identificar variables que son inyectadas en el sistema

  private _httpClient = inject(HttpClient);

  //Definir la ruta de acceso al back - Se maneja desde el environment donde se define si el código esta en producción o pruebas para saber a que back debo apuntar
  private apiURL = environment.appUrl;

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
    /* return this._httpClient.put('${this.apiURL}/products/' + id, ProductToUpdate); *///FORMA 1 DE ENVIAR LA INFORMACION - PERMITE ENVIAR UN PARAMETRO
    return this._httpClient.put(`${this.apiURL}/products/${id}`, ProductToUpdate);//FORMA 2 DE ENVIAR LA INFORMACION - PERMITE ENVIAR UN PARAMETRO
  };

  //DELETE
  deleteProducts(id: string){
    /* return this._httpClient.delete(`${this.apiURL}/products/${id}`); */
    return this._httpClient.delete(this.apiURL + '/products/', {params: {id}});//FORMA 3 DE ENVIAR INFORMACION - PERMITE ENVIAR MULTIPLES PARAMETROS DE INFORMACION
  };
}
