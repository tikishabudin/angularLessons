import { Component, Input } from '@angular/core';
import { UserData } from '../../../../userdata.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() userData!:UserData;
}
