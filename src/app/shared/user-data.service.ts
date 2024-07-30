import { Injectable } from '@angular/core';
import { UserData } from '../userdata.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private users:UserData[] = [];
  private selectedUser!:UserData;

  constructor(private comms:HttpClient) { }

  getSelectedUser()
  {
    return this.selectedUser;
  }

  setSelectedUser(theUser:UserData){
    this.selectedUser = theUser;
  }

  getUsers():UserData[]
  {
    return this.users
  }

  loadUsers()
  {
    this.comms.get<{[key:string]:UserData}>('https://trainingproject-fbe04-default-rtdb.europe-west1.firebasedatabase.app/users.json')
    .pipe(
      map((rawUsers)=>{
        for(const key in rawUsers)
        {
          this.users.push({...rawUsers[key],id:key});
        }
        return this.users;
      })
    )
    .subscribe((result)=>{
      console.log(result,this.users);
    })
    // if(!this.users)
    // {
    //   this.users = JSON.parse(localStorage['users']);
    // }

  }

  saveUsers()
  {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
