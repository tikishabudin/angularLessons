import { Directive, ElementRef, HostListener } from '@angular/core';
import { UserDataService } from './user-data.service';

@Directive({
  selector: 'a[appChangeLink]'
})
export class ChangeLinkDirective {
  wantstogo:boolean = false;

  @HostListener('click')
  onClickLink(event:Event)
  {
    this.wantstogo = confirm("Are you sure you want to leave?");

    if(this.wantstogo)
    {
      const address = this.elementRef.nativeElement.href;
      this.elementRef.nativeElement.href = address + "?ref=" + this.userSvc.getSelectedUser().name;
      return;
    }

    event.preventDefault();
  }

  constructor(private elementRef:ElementRef, private userSvc:UserDataService) { }

}
