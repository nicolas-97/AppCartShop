import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { Subject } from 'rxjs/';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartDetailService {


  private listProducCart$ = new Subject<any>(); 

  constructor(private cartServices: CartService) { }

  updateListCart(idCart){
    this.cartServices.getId(idCart).subscribe(res=>{
      this.listProducCart$.next(res);
    })
  }

  getListCart():Observable<any>{
    return this.listProducCart$.asObservable();
  }
}
