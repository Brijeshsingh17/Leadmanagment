import { Component, OnInit } from '@angular/core';
import { product} from '../model/products';
import { LeadService } from '../lead.service';
import { Store } from '@ngrx/store';
import { AppState } from '../stores/userAppState/userApp.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {
  ELEMENT_DATA: product[]
  roles
  jObj:any
  constructor(private leadsservice:LeadService,
    private router: Router,private store: Store<AppState>) { 

   
    }
  displayedColumns: string[] = ['ProductName','ProductDescription'];
  dataSource:product[]


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

    this.leadsservice.getProductDetails( )
    .subscribe(Data => {
       this.dataSource = Data;
       console.log( this.dataSource) 
    });
  }

}
