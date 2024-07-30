import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string | null, param1:string, param2:string): string {
    return 'This was transformed: ' + value + param1 + param2;
  }

}
