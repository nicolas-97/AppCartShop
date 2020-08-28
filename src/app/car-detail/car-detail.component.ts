import { Component, OnInit } from '@angular/core';
import { OcountCartService } from '../shared/services/ocount-cart.service';
import { CartDetailService } from '../shared/services/cart-detail.service';
import { ProductCartService } from '../shared/services/product-cart.service';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  idCartd:any=0;
  listCart:any={};
  constructor(private countServices:OcountCartService, private cartDetailServices:CartDetailService, private productCart:ProductCartService, private cartServices:CartService) { }

  ngOnInit(): void {
    this.countServices.getCartid().subscribe(res=>{
      this.idCartd=res;
      if(this.idCartd!=0){
        this.cartDetailServices.updateListCart(this.idCartd);
      }
    });

    this.cartDetailServices.getListCart().subscribe(res=>{
      this.listCart=res;
    })
  }

  delete(idProduct){
    this.productCart.delete(idProduct).subscribe(res=>{
      if(res==1){
        this.cartDetailServices.updateListCart(this.idCartd);
        this.countServices.updateCountCart();
      }
    })
  }

  updateProduct(data){
    data.quantity = parseInt(data.quantity);
    let dataSend = {
      "id": data.id,
      "cart_id": data.cart_id,
      "product_id": data.product_id,
      "quantity": data.quantity
    }
    console.log(dataSend)
    this.productCart.put(data).subscribe(res=>{
      console.log(res);
    })
  }

  submit(){
    this.cartServices.checkCart(this.idCartd).subscribe(res=>{
      console.log(res);
      this.countServices.updateCountCart();
    });
  }


}
