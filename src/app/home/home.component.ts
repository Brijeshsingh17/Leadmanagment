import { Component, OnInit } from '@angular/core';
import { leads} from '../model/leads';
import { LeadService } from '../lead.service';
// import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { followUp } from '../stores/models/userLogin.model';
import { AppState } from '../stores/userAppState/userApp.state';
import *as userLoginActions from './../stores/actions/userLogin.action' 
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  leadid:any

  ELEMENT_DATA:leads[]
 public LeadId:number
 jObj:any

  constructor(private leadsservice: LeadService,
    private router: Router,private store: Store<AppState>) {  
  //   store.select('followUp').subscribe(obj=>{
  //   console.log(obj); 

    
  //   console.log(JSON.stringify(obj))
  //   var jObj= JSON.parse(JSON.stringify(obj))
  //   console.log(jObj);
  //   console.log(jObj.id);
  // })
}
  displayedColumns: string[] = ['leadId', 'employeeId','name', 'leadRefrence', 'date','mobileNo','alternateNumberNo','email','address','city','state','interestedIn','followUp'];
  dataSource:leads[]
  
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
    
    
    this.leadsservice.getLeadDetails()
    .subscribe(Data => {
       this.ELEMENT_DATA = Data;
       console.log( this.ELEMENT_DATA) 
       
      
   this.dataSource= this.ELEMENT_DATA
     console.log( this.dataSource ) 
     var idObj= JSON.parse(JSON.stringify(this.dataSource))
     console.log(idObj);
     console.log(idObj[0].id);
this.leadid=idObj[0].id;
});
  }
 

   submitId(element){
     console.log(element)
    let param : followUp={id: element.id}
    
     this.store.dispatch(new userLoginActions.AddfollowUp(param) )

   }

 
  
}




  


