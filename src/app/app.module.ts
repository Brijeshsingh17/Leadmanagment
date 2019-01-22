import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LeadComponent } from './lead/lead.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule, MatSelectModule, MatNativeDateModule, MatDatepickerModule, MatRadioModule,
         MatGridListModule, MatButtonModule,MatDialogModule, MatListModule,
         MatProgressBarModule} from '@angular/material';     
import { StoreModule } from '@ngrx/store';
import { reducer } from './stores/reducers/userLogin.reducer';       
import { EmployeeComponent } from './employee/employee.component';
import { NewEmpComponent } from './new-emp/new-emp.component';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RoleComponent } from './role/role.component';
import { ProductComponent } from './product/product.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FollowUpComponent } from './follow-up/follow-up.component';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DisplayRoleComponent } from './display-role/display-role.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeadComponent,
    EmployeeComponent,
    NewEmpComponent,
    MainComponent,
    RoleComponent,
    ProductComponent,
    FollowUpComponent,
    DisplayRoleComponent,
    DisplayProductComponent,
    LoginComponent,
    
  ],
  imports: [
    MatPaginatorModule,
    HttpClientModule,
    BrowserModule,
    MatCheckboxModule,
    AppRoutingModule,FormsModule,
    MatCardModule,MatToolbarModule,MatTabsModule,MatInputModule,MatTableModule,
    MatFormFieldModule, MatSelectModule, MatNativeDateModule, MatDatepickerModule, MatRadioModule,
  MatGridListModule, MatButtonModule,MatDialogModule, MatListModule, MatProgressBarModule,
  MatSidenavModule,BrowserAnimationsModule,MatMenuModule,MatIconModule, LayoutModule,
  StoreModule.forRoot({
    followUp: reducer,
    empId: reducer
  })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
