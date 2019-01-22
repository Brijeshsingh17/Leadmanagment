import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';

import { Store } from '@ngrx/store';

import { AppState } from '../stores/userAppState/userApp.state';


@Component({
  selector: 'app-new-emp',
  templateUrl: './new-emp.component.html',
  styleUrls: ['./new-emp.component.css']
})
export class NewEmpComponent implements OnInit {
roles:any
employeeDetails:any
password:any

mobileNo: any;
employeeName: any;

address: any;
email: any;
city:any;
state:any;
role:any;
teamLead:any;
jObj:any;


  constructor(private route: ActivatedRoute,
               private location: Location,
               private router: Router,
               private employeeservice:EmployeeService,
               private store: Store<AppState>) { 

            
               }

  ngOnInit() {
   this.store.select('followUp').subscribe(obj=>{
      console.log(obj); 
  
      
      console.log(JSON.stringify(obj))
      var jObj= JSON.parse(JSON.stringify(obj))
      console.log(jObj);
      console.log(jObj.id);
  

    if(jObj.id==0)
        this.router.navigate(['login']);
      })
        

    this.employeeservice.getrole()
       .subscribe(Data => {
          this.roles = Data;
          console.log(this.roles) });

          this.employeeservice.getemployee()
          .subscribe(Data => {
             this.employeeDetails = Data;
             console.log(this.employeeDetails) });
         
  }
  onSubmit() {
    let body={};
    
       body = {
      
       
        employeeName: this.employeeName,
        mobileNo: this.mobileNo,
        password:this.password,

        address: this.address,
        email: this.email,
        city:this.city,
        state:this.state,
       role:this.role,
       teamLead:this.teamLead
       
      }
      console.log(body)
      this.employeeservice.employeeRegister(body).subscribe(data => {
        const newData: any = data;
        console.log(newData);

        if(newData.status==1){
          this.router.navigate(['employee'])
        }else{
          console.log("enter all details");
        }
    });
  }

  

  goBack(): void {
    this.location.back();
  
  }
  
  
          
       
      }
      
