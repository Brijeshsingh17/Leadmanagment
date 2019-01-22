import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Store } from '@ngrx/store';
import { AppState } from '../stores/userAppState/userApp.state';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productName:any
  productDescription:any
  jObj:any

  constructor(private route: ActivatedRoute,
    private location: Location,
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
  }
  onSubmit(){
    let body={};
    
    body = { 
      productName:this.productName,
      productDescription:this.productDescription

  }
  console.log(body)
  this.employeeservice.productRegister(body).subscribe(data => {
    const newData: any = data;
    console.log(newData);

    if(newData.status==1){
     this.router.navigate(['product'])
    }else{
      console.log("enter product the press submit");
    }
});
}
  goBack(): void {
    this.location.back();
  
  }

}
