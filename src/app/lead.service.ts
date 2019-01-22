import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { leads} from './model/leads';
import { product} from './model/products';
const httpOptions = {
  headers: new HttpHeaders ({
    'content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(private http: HttpClient) { }
  leadRegister(body){
    return this.http.post('http://localhost:3300/postlead',body,{})
  }
  getLeadDetails():Observable<leads[]>
  {
    return this.http.get<leads[]>('http://localhost:3300/getLeadsDetails')
  }
 getLeadDetail(id):Observable<leads[]>
  {
    return this.http.get<leads[]>('http://localhost:3300/getLeadsDetail?id='+id)
  }
  getProductDetails():Observable<product[]>
  {
    return this.http.get<product[]>('http://localhost:3300/productDetails')
  }
  followUpRegister(body){
    return this.http.post('http://localhost:3300/postfollowUp',body,{})
  }
}
