import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:String="http://127.0.0.1:8000/api/product/"
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  getId(idProduct):Observable<any>{
    return this.http.get(`${this.apiUrl+idProduct}`);
  }
}
