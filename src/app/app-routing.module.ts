import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Day2lifecycleComponent } from './Lessons/day2lifecycle/day2lifecycle.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',component: HomeComponent},//localhost:4200/
  {path:'lifecycle',component:Day2lifecycleComponent},
  //{path:'lessons', loadChildren:'./Lessons/lessons.module#LessonsModule'},
  {
    path:'lessons', 
    loadChildren: ()=>import('./Lessons/lessons.module').then(module=>module.LessonsModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./Admin/admin/admin.module').then(m=>m.AdminModule)
  },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
