import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Store } from '@ngrx/store';
import { AppState } from '../stores/userAppState/userApp.state';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
role:string
jObj:any;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private employeeservice:EmployeeService,
    private store: Store<AppState>) { 

    
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
  }
  onSubmit(){
    let body={};
    
    body = { 
      role:this.role

  }
  console.log(body)
  this.employeeservice.roleRegister(body).subscribe(data => {
    const newData: any = data;
    console.log(newData);

    if(newData.status==1){
      this.router.navigate(['role'])
    }else{
      console.log("enter role then press submit");
    }
});
}
  goBack(): void {
    this.location.back();
  
  }

}
