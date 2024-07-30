import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { DisplayComponent } from './calculator/display/display.component';
import { SideComponent } from './calculator/side/side.component';
import { UserComponent } from './calculator/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { AuthService } from '../../shared/auth.service';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';
import { PayFormatterPipe } from '../../shared/pay-formatter.pipe';

const routes:Routes = [
  {path:'',component:AdminHomeComponent, children:[
    {path:'newUser',component: NewUserComponent},
    {path:'calculator',component: CalculatorComponent, canActivate:[AuthService]},
  ]},
  
];

@NgModule({
  declarations: [
    AdminHomeComponent,    
    SideComponent,
    CalculatorComponent,
    DisplayComponent,    
    UserComponent,
    NewUserComponent,    
    CardComponent,    
    PayFormatterPipe,    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports:[
    SideComponent,
    CalculatorComponent,
    DisplayComponent,    
    UserComponent,
    NewUserComponent,    
  ]
})
export class AdminModule { }
