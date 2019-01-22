import { Component, OnInit } from '@angular/core';
import { employee} from '../model/employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../stores/userAppState/userApp.state';






@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  token:any
  
  ELEMENT_DATA:employee[]
  check:any

  constructor(private employeeservice:EmployeeService,private store: Store<AppState>,
    private router: Router) {

      // store.select('empId').subscribe(obj=>{
      //   console.log(obj); 
    
        
      //   console.log(JSON.stringify(obj))
      //   var jObj= JSON.parse(JSON.stringify(obj))
      //   console.log(jObj);
      //   console.log(jObj.employeeId);

      //   this.check=jObj.emoloyeeId
      
      // })
     }
  displayedColumns: string[] = ['employeeId', 'employeeName', 'mobileNo', 'email','address','city','state','role','teamLead'];
  dataSource:employee[]
  ngOnInit() {
  
  this.store.select('empId').subscribe(obj=>{
      console.log(obj); 
  
      
      console.log(JSON.stringify(obj))
      var jObj= JSON.parse(JSON.stringify(obj))
      console.log(jObj);
      console.log(jObj.employeeId);

    
    
 
    
    console.log(jObj.employeeId)
    if(jObj.employeeId==0)
        this.router.navigate(['login']);
      })
    
    this.employeeservice.getemployee()
    .subscribe(Data => {
       this.ELEMENT_DATA = Data;
       console.log( this.ELEMENT_DATA) 
       
      
     this.dataSource= this.ELEMENT_DATA
     console.log( this.dataSource ) 

});

       
  }
 
  

   
   
}
