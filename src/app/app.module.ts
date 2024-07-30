import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LessonsModule } from './Lessons/lessons.module';
import { AdminModule } from './Admin/admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharingService } from './Lessons/day2services/sharing.service';
import { UserDataService } from './shared/user-data.service';
import { MenuComponent } from './menu/menu.component';
import { ChangeLinkDirective } from './shared/change-link.directive';
import { LoginComponent } from './login/login.component';
import { ServicebangService } from './Lessons/day4-observables/servicebang.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ChangeLinkDirective,    
    LoginComponent,
    HomeComponent,    
    NotFoundComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LessonsModule,
    AdminModule
  ],
  providers: [SharingService, UserDataService, ServicebangService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
