import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { followUp } from '../stores/models/userLogin.model';
import { AppState } from '../stores/userAppState/userApp.state';
import *as userLoginActions from './../stores/actions/userLogin.action' 
import { empId } from '../stores/models/empId.Model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mobileNo:any
  password:any
  token:any
  constructor( private employeeservice:EmployeeService,private router: Router,private store: Store<AppState>) { store.select('empId').subscribe(obj=>{
    console.log(obj); 

    
    console.log(JSON.stringify(obj))
    var jObj= JSON.parse(JSON.stringify(obj))
    console.log(jObj);
    console.log(jObj.employeeId);
  })}

  ngOnInit() {
  }
  onClick()
  { 
    let body={};
    
  body = {
    mobileNo:this.mobileNo,
    password:this.password

    
    }
    console.log(body)
    this.employeeservice.login(body).subscribe(data => {
      const newData: any = data;
      console.log(newData);
console.log(newData.token)
this.token=newData.token
console.log(this.token);
this.employeeservice.AccessToken=this.token;

      if(newData.status==1){
        console.log(newData.rows)
        let param : empId={employeeId:newData.rows }
    
        this.store.dispatch(new userLoginActions.AddempId(param) )
        
        this.router.navigate(['home'])
      }else{
        this.router.navigate(['login'])
        console.log("wrong password");
      // window.alert("please enter the correct number or password")
      }
    });
  

}
}

