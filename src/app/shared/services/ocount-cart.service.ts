import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { Subject } from 'rxjs/';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OcountCartService {

  private countProductCart$ = new Subject<Number>(); 

  constructor(private cartServices:CartService) { }

  updateCountCart(){
    try{
      this.cartServices.getAll().subscribe(cart=>{
        this.countProductCart$.next(cart.length)
      })
    }catch(e){
      this.countProductCart$.next(0);
    }
  }

  getCount():Observable<Number>{
    return this.countProductCart$.asObservable();
  }
}
