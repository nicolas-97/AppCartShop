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

  idCart:any=null;
  products:any={};


  constructor(private productServices:ProductService, private productCartServices:ProductCartService, private ocountServices:OcountCartService) { }

  ngOnInit(): void {
    this.ocountServices.updateCountCart();
    this.loadProducts();
  }

  loadProducts(){
    this.productServices.getAll().subscribe(res=>{
      this.products=res;
    })
  }

  addProductToCart(id){
    console.log(this.idCart);
    let data = {
      "cart_id": this.idCart,
      "product_id": id,
      "quantity": 1
    }

    console.log(data);
    this.productCartServices.post(data).subscribe(res=>{
      if(this.idCart==null){
        this.idCart=res.id;
      }
      this.ocountServices.updateCountCart();
    })
  }

}
