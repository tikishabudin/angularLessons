import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day2dataBindingComponent } from './day2data-binding/day2data-binding.component';
import { Day2lifecycleComponent } from './day2lifecycle/day2lifecycle.component';
import { Day2servicesComponent } from './day2services/day2services.component';
import { TwiddledeeComponent } from './day2services/twiddledee/twiddledee.component';
import { AttDirectiveDirective } from './day3attribute-directives/att-directive.directive';
import { Day3attributeDirectivesComponent } from './day3attribute-directives/day3attribute-directives.component';
import { Day3reactiveFormsComponent } from './day3reactive-forms/day3reactive-forms.component';
import { Day3structuralDirectivesComponent } from './day3structural-directives/day3structural-directives.component';
import { StructDirDirective } from './day3structural-directives/struct-dir.directive';
import { Day3templateDrivenFormsComponent } from './day3template-driven-forms/day3template-driven-forms.component';
import { Day4ObservablesComponent } from './day4-observables/day4-observables.component';
import { Sample1Component } from './day4-observables/sample1/sample1.component';
import { Sample2Component } from './day4-observables/sample2/sample2.component';
import { CustomPipe } from './day4-pipes/custom.pipe';
import { Day4PipesComponent } from './day4-pipes/day4-pipes.component';
import { Day5HttpClientsComponent } from './day5-http-clients/day5-http-clients.component';
import { LessonsHomeComponent } from './lessons-home/lessons-home.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

const routes:Routes = [
  {path:'', component: LessonsHomeComponent, children:[
    {path:'observables',component:Day4ObservablesComponent,canActivate:[AuthService]},
    {path:'pipes', component:Day4PipesComponent},
    {path:'http', component: Day5HttpClientsComponent}
  ]},
];

@NgModule({
  declarations: [
    Day2dataBindingComponent,
    Day2lifecycleComponent,
    Day2servicesComponent,
    TwiddledeeComponent,
    Day3attributeDirectivesComponent,
    AttDirectiveDirective,
    Day3structuralDirectivesComponent,
    StructDirDirective,
    Day3templateDrivenFormsComponent,
    Day3reactiveFormsComponent,Day4PipesComponent,
    CustomPipe,
    Day4ObservablesComponent,
    Sample1Component,
    Sample2Component,
    LessonsHomeComponent,
    Day5HttpClientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    [
      Day2dataBindingComponent,
      Day2lifecycleComponent,
      Day2servicesComponent,
      TwiddledeeComponent,
      Day3attributeDirectivesComponent,
      AttDirectiveDirective,
      Day3structuralDirectivesComponent,
      StructDirDirective,
      Day3templateDrivenFormsComponent,
      Day3reactiveFormsComponent,Day4PipesComponent,
      CustomPipe,
      Day4ObservablesComponent,
      Sample1Component,
      Sample2Component,
      LessonsHomeComponent,
      Day5HttpClientsComponent
    ]
  ]
})
export class LessonsModule { }
