import { Component, OnInit } from '@angular/core';
import { OcountCartService } from '../shared/services/ocount-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ocountServices:OcountCartService) { }

  count$:Observable<Number>; 
  count:any=0;

  ngOnInit(): void {
    this.count$=this.ocountServices.getCount();
    this.count$.subscribe(count=>{
      this.count=count;
    });
  }

}
