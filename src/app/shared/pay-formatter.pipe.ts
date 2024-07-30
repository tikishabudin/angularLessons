import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'payFormatter',
  pure: false
})
export class PayFormatterPipe implements PipeTransform {
  
  transform(pay: number): string {
    
    console.log("Transform occuring...");
    const rm = pay.toFixed(2);
    const euro = (pay/5 as number).toFixed(2);
    return 'RM ' + rm + ` (€ ${euro})`;
  }

}
