import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeadComponent } from './lead/lead.component';
import { EmployeeComponent } from './employee/employee.component';
import { NewEmpComponent } from './new-emp/new-emp.component';
import { MainComponent } from './main/main.component';
import { RoleComponent } from './role/role.component';
import { ProductComponent } from './product/product.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { DisplayRoleComponent } from './display-role/display-role.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  {path:'home', component:HomeComponent},
  {path:'lead', component:LeadComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'newEmp', component:NewEmpComponent},
  // {path:'',component:MainComponent},
  { path:'newRole',component:RoleComponent},
  {path:'newProduct',component:ProductComponent},
  // {path:'', component:LeadComponent},
  {path:'follow-up',component:FollowUpComponent},
   {path:'role',component:DisplayRoleComponent},
  {path:'product',component:DisplayProductComponent},

    {path:'login', component:LoginComponent},
    {path:'', component:LoginComponent},
 



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
