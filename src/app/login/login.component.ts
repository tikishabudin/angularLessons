import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  disable = true;
  loginDetails:{email:string,password:string} = {email:"",password:''};

  onLoginChange(form:NgForm)
  {
    if(form.valid)
      this.disable = false;
    else
      this.disable = true;

  }

  onSubmit(form:NgForm)
  {
    this.loginDetails.email = form.controls['email'].value;
    this.loginDetails.password = form.controls['password'].value;
    console.log(this.loginDetails);
  }
}
