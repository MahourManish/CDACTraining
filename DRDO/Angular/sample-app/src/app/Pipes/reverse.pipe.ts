import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(typeof(value) == 'string'){
      /* return value
              .split('')
              .reverse()
              .join('');
 */
      return (value.split(' ').map(a => a.split('').reverse().join(''))).join(" ");
    }
    else{
      return value;
    }
  }

}
