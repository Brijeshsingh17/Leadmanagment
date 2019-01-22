import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { LeadService } from '../lead.service';
import { EmployeeService } from '../employee.service';
import { Store } from '@ngrx/store';
import { followUp } from '../stores/models/userLogin.model';
import { AppState } from '../stores/userAppState/userApp.state';
import *as userLoginActions from './../stores/actions/userLogin.action' 
import { empId } from '../stores/models/empId.Model'

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  employeeDetails:any
  leadRefrence:any
  date:Date
  name:any
  mobileNo:number
  alternateMobileNo:number
  email:any
  address:any
  city:any
  state:any
  mutual:any
  interestedIn:any
  insurance:any
  employeeId:any
  jObj:any

  constructor(  private route: ActivatedRoute,
              private location: Location,
              private leadservice:LeadService,
              private router: Router,
              private employeeservice:EmployeeService,private store: Store<AppState>) {
                // store.select('empId').subscribe(obj=>{
                //   console.log(obj); 
              
                  
                //   console.log(JSON.stringify(obj))
                //   var jObj= JSON.parse(JSON.stringify(obj))
                //   console.log(jObj);
                //   console.log(jObj.employeeId);
                
                // })
               }

  ngOnInit() {
    this.store.select('empId').subscribe(obj=>{
      console.log(obj); 
  
      
      console.log(JSON.stringify(obj))
      var jObj= JSON.parse(JSON.stringify(obj))
      console.log(jObj);
      console.log(jObj.employeeId);
   

    if(jObj.employeeId==0)
    this.router.navigate(['login']);
  })

    this.employeeservice.getemployee()
    .subscribe(Data => {
       this.employeeDetails = Data;
       console.log(this.employeeDetails) });
  }
 
  onSubmit() {
    if(this.mutual===true)
    {
      this.mutual="mutual"
    }
    else{
      this.mutual="null"
    }
    if(this.insurance===true)
    {
      this.insurance="insurance"
    }
    else{
      this.insurance="null"
    }
    let body={};
    
       body = {
         employeeId:this.jObj.employeeId,
        leadRefrence:this.leadRefrence,
       
        name:this.name,
        mobileNo:this.mobileNo,
        alternateMobileNo:this.alternateMobileNo,
        email:this.email,
        address:this.address,
        city:this.city,
        state:this.state,
        matual:this.mutual,
        interestedIn:this.mutual+"/"+this.insurance,
        insurance:this.insurance
      
       
        
       
      }
      console.log(body)
      this.leadservice.leadRegister(body).subscribe(data => {
        const newData: any = data;
        console.log(newData);

        if(newData.status==1){
          this.router.navigate(['home'])
        }else{
          console.log("emter all detail");
        }
    });
  }
  
  

  goBack(): void {
    this.location.back();
  }

}
