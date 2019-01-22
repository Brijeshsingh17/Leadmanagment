import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { followUp } from '../stores/models/userLogin.model';
import { AppState } from '../stores/userAppState/userApp.state';
import *as userLoginActions from './../stores/actions/userLogin.action' 
import { LeadService } from '../lead.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.css']
})
export class FollowUpComponent implements OnInit {
  select=null;
  leadid:any
  ELEMENT_DATA:any
  leadRefrence:any
  date:string
  name:string
  mobileNo:any
  alternateMobileNo:any
  email:any
  address:any
  city:any
  state:any
  interestedIn:any
  dataSource:any
  productDetails:any
  employeeId:any
  contactType:any
  output:any
  reason:any=null
  nextDate:any=null
  custumerNo:any=null
  product:any=null
  leadId:any
  constructor(private store: Store<AppState> ,private leadsservice:LeadService,
                  private location: Location ) {  store.select(state=> state.followUp).subscribe(obj=>{
    console.log(obj); 

    
    console.log(JSON.stringify(obj))
    var jObj= JSON.parse(JSON.stringify(obj))
    console.log(jObj);
    console.log(jObj.id);
    this.leadid=jObj.id
  })}

  ngOnInit() {
    this.leadsservice.getProductDetails( )
    .subscribe(Data => {
       this.productDetails = Data;
       console.log( this.productDetails) 
    });
    this.leadsservice.getLeadDetail( this.leadid)
    .subscribe(Data => {
       this.ELEMENT_DATA = Data;
       console.log( this.ELEMENT_DATA) 
       this.dataSource= this.ELEMENT_DATA
       console.log( this.dataSource ) 
       var dObj= JSON.parse(JSON.stringify(this.dataSource))
       console.log(dObj[0]);
          this.employeeId=dObj[0].employeeId
         this.leadId=dObj[0].id
       this.leadRefrence=dObj[0].leadRefrence
       this.date=dObj[0].date
       this.name=dObj[0].name
      this.mobileNo=dObj[0].mobileNo
      this.alternateMobileNo=dObj[0].alternateMobileNo
       this.email=dObj[0].email
       this.address=dObj[0].address
       this.city=dObj[0].city
      this.state=dObj[0].state
      this.interestedIn=dObj[0].interestedIn
      
      
  

  });
}
onSubmit() { let body={};
    
body = {
  employeeId:this.employeeId,
 leadRefrence:this.leadRefrence,
 leadId:this.leadId,
date:this.date,
 name:this.name,
 mobileNo:this.mobileNo,
 alternateMobileNo:this.alternateMobileNo,
 email:this.email,
 address:this.address,
 city:this.city,
 state:this.state,
 contactType:this.contactType,
output:this.select,
 interestedIn:this.interestedIn,
 nextDate:this.nextDate,
 reason:this.reason,
 custumerNo:this.custumerNo,
 product:this.product

 

}
console.log(body)
this.leadsservice.followUpRegister(body).subscribe(data => {
  const newData: any = data;
  console.log(newData);
});
}

goBack(){
  this.location.back()
}

}
 
 


