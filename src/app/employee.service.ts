import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse,HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { role} from './model/role';
import { employee} from './model/employee';

// const httpOptions = {
//   headers: new HttpHeaders ({
//     'content-Type': 'application/json',
//  'Bearer':this.AccessToken


    
//    })
//  };


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  AccessToken:string="";

  constructor(private http: HttpClient) {
   
   }
   
 getrole(): Observable<role[]> {
    return this.http.get<role[]>('http://localhost:3300/getrole'); 
  }
 getemployee(): Observable<employee[]> {
  // var httpOptions = {
  //   headers: new HttpHeaders ({
  //     'content-Type': 'application/json',
  //  'Bearer':this.AccessToken
  
  
      
  //    })
  //  };
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':this.AccessToken
    })
  };
  //  setHeaders: { 
  //   Authorization: `Bearer {this.token}`
   
    // var HeadersForApi=new HttpHeaders();
    // var headers = new HttpHeaders();
    // headers.set('Content-Type', 'application/json; charset=utf-8').set('Bearer',this.AccessToken);
    if(this.AccessToken)
    {
      // HeadersForApi.append('Authorization','Bearer'+this.AccessToken);
    }
    console.log(httpOptions)
    return this.http.get<employee[]>('http://localhost:3300/getemployee',httpOptions)

  
  }
  employeeRegister(body){
    return this.http.post('http://localhost:3300/postemployee',body,{})
  }
  roleRegister(body){
    return this.http.post('http://localhost:3300/postrole',body,{})
  }
  productRegister(body){
    return this.http.post('http://localhost:3300/postproduct',body,{})
  }
  login(body){
    return this.http.post('http://localhost:3300/login',body,{},)
  }
  
}
