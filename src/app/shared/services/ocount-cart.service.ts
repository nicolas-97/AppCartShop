import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { Subject } from 'rxjs/';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OcountCartService {

  private countProductCart$ = new Subject<Number>(); 
  private cartId$ = new Subject<Number>(); 

  constructor(private cartServices:CartService) { }

  updateCountCart(){
    try{
      this.cartServices.getAll().subscribe(cart=>{
        console.log(cart);
        this.cartId$.next(cart[0].id);
        this.countProductCart$.next(cart.length)
      })
    }catch(e){
      this.cartId$.next(0);
      this.countProductCart$.next(0);
    }
  }

  getCartid(){
    return this.cartId$.asObservable();
  }
  getCount():Observable<Number>{
    return this.countProductCart$.asObservable();
  }
}
