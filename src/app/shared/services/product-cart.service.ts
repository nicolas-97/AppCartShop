import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  apiUrl:String="http://127.0.0.1:8000/api/cartShop/"
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  get(id):Observable<any>{
    return this.http.get(`${this.apiUrl+id}`);
  }

  post(dataProduct){
    return this.http.post(`${this.apiUrl}`,dataProduct)
  }

  put(dataProduct){
    return this.http.put(`${this.apiUrl+'1'}`,dataProduct)
  }

  delete(idProduct){
    return this.http.delete(`${this.apiUrl+idProduct}`)
  }
}
