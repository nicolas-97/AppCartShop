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

  products:any={};


  constructor(private productServices:ProductService, private productCartServices:ProductCartService, private ocountServices:OcountCartService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.productServices.getAll().subscribe(res=>{
      this.products=res;
    })
  }

  addProductToCart(id){
    let data = {
      "cart_id": null,
      "product_id": id,
      "quantity": 1
    }
    this.productCartServices.post(data).subscribe(res=>{
      console.log(res);
      this.ocountServices.updateCountCart();
    })
  }

}
