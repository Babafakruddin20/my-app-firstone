import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanktaskService {

  constructor(private _httpClient:HttpClient) { }

  getbanktasks():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  
  }
  getbanktask(id:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  
  }
  getFilteredbanktask(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);

  }
  getSortedbanktask(column:string, order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
  }
  getPagebanktask(page:number):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page="+page);
  }

  createbanktask(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
  }

  
  deletebanktask(id:string):Observable<any>{
    return this._httpClient.delete("data:image/jpeg;base64,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"+id);
  }
}
