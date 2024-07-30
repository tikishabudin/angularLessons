import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IsSame } from '../../../shared/shared.validators';
import { UserDataService } from '../../../shared/user-data.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  newUserSub!:Subscription;

  registerUser = new FormGroup({
    name: new FormControl('',{validators:[Validators.required]}),
    email: new FormControl('',{validators:[Validators.required,Validators.email]}),
    position: new FormControl('',{validators:[Validators.required]}),
    role: new FormControl('',{validators:[Validators.required]}),
    passwords: new FormGroup({
      password:new FormControl('',{validators:[Validators.required]}),
      confirmPassword:new FormControl('',{validators:[Validators.required]})
    },{validators:[IsSame('password','confirmPassword')]})
  })

  constructor(private userSvc:UserDataService, private comms:HttpClient){}

  onSubmit()
  {
    if(this.registerUser.valid)
    {
      // const users = this.userSvc.getUsers();
      const newUser = {
        name:(this.registerUser.controls['name'].value as string),
        email:(this.registerUser.controls['email'].value as string),
        position:(this.registerUser.controls['position'].value as string),
        role:(this.registerUser.controls['role'].value as string),
        password:(this.registerUser.controls.passwords.controls.password.value as string)
      };

      this.newUserSub = this.comms.post('https://trainingproject-fbe04-default-rtdb.europe-west1.firebasedatabase.app/users.json', newUser)
      .subscribe((response)=>{
        console.log(response);
      });
      // users.push(newUser);
      // this.userSvc.saveUsers();
    }
  }

  ngOnDestroy()
  {
    this.newUserSub.unsubscribe();
  }
}
