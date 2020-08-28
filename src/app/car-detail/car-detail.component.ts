import { Component, OnInit } from '@angular/core';
import { OcountCartService } from '../shared/services/ocount-cart.service';
import { CartDetailService } from '../shared/services/cart-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  idCartd:any=0;
  listCart:any={};
  constructor(private countServices:OcountCartService, private cartDetailServices:CartDetailService) { }

  ngOnInit(): void {
    this.countServices.getCartid().subscribe(res=>{
      this.idCartd=res;
      if(this.idCartd!=0){
        this.cartDetailServices.updateListCart(this.idCartd);
      }
    });

    this.cartDetailServices.getListCart().subscribe(res=>{
      this.listCart=res;
      console.log(res)
    })
  }

}
