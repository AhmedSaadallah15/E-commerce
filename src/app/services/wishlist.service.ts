import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {



  // header:any={
  //   token :localStorage.getItem('userToken')
  // }

  constructor(private _HttpClient:HttpClient) { }


  addToWishlist(productId:string):Observable<any>{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
  {
     productId:productId
  }
)
  }
  removeFromWishlist(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`)
      }

  displayWishlist():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`)
          }

}


