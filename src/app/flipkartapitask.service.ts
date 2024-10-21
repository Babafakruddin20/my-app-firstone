import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartapitaskService {

  constructor(private _httpClient:HttpClient) { }
  getflipkartapitask():Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products");
  }
}
