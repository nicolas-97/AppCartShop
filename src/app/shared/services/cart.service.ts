import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl:String="http://127.0.0.1:8000/api/cart/"
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  getId(id):Observable<any>{
    return this.http.get(`${this.apiUrl+id}`);
  }

  checkCart(idCart):Observable<any>{
    return this.http.put(this.apiUrl+idCart,this.headers);
  }


}
