import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _HttpClient:HttpClient) { }




  getAllProducts():Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  getAllProductDateils(id:string):Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }


  getAllProductTwo():Observable<any> {
    return this._HttpClient.get(`  https://ecommerce.routemisr.com/api/v1/products?page=2`);
  }







}
