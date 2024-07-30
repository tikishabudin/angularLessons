import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserDataService } from '../../shared/user-data.service';

@Directive({
  selector: '[appStructDir]'
})
export class StructDirDirective {
  @Input() set appStructDir(condition:string)
  {
    if(condition === "Hello")
    {
      console.log(this.userSvc.getUsers());
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else
    {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef:TemplateRef<any>,private vcRef:ViewContainerRef,private userSvc:UserDataService) { }

}
