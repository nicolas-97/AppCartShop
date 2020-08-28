import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products:any={};


  constructor(private productServices:ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.productServices.getAll().subscribe(res=>{
      this.products=res;
    })
  }

}
