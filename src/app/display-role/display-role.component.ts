import { Component, OnInit } from '@angular/core';
import { role} from '../model/role';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../stores/userAppState/userApp.state';
@Component({
  selector: 'app-display-role',
  templateUrl: './display-role.component.html',
  styleUrls: ['./display-role.component.css']
})
export class DisplayRoleComponent implements OnInit {
  ELEMENT_DATA: role[]
  roles
  jObj:any
  constructor(private employeeservice:EmployeeService,
    private router: Router,private store: Store<AppState>) { }
  displayedColumns: string[] = ['Role'];
  dataSource:role[]
  

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

    this.employeeservice.getrole()
       .subscribe(Data => {
          this.roles = Data;
          console.log(this.roles)
        this.dataSource=this.roles });
  }

}
