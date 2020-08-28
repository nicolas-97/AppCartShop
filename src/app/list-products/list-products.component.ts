import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { ProductCartService } from '../shared/services/product-cart.service';
import { OcountCartService } from '../shared/services/ocount-cart.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  detailCart:any={};
  idCart:any=null;
  products:any={};
  



  constructor(private productServices:ProductService, private productCartServices:ProductCartService, private ocountServices:OcountCartService) { }

  ngOnInit(): void {
    this.ocountServices.updateCountCart();
    this.loadProducts();
    this.ocountServices.getCartid().subscribe(res=>{
      if(res!=0){
        this.idCart=res;
      }
    })
    this.ocountServices.getCartid().subscribe(res=>{
      console.log("Aqui res "+res);
      if(res==0){
        this.idCart=null;
      }
    })
  }

  loadProducts(){
    this.productServices.getAll().subscribe(res=>{
      this.products=res;
    })
  }

  addProductToCart(id){
    
    let data = {
      "cart_id": this.idCart,
      "product_id": id,
      "quantity": 1
    }

    console.log(data);
    this.productCartServices.post(data).subscribe(res=>{
      this.detailCart=res;
      if(this.idCart==null){
        this.idCart=this.detailCart.id;
      }
      this.ocountServices.updateCountCart();
    })
  }

}
