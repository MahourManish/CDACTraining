import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../Models/customer';

@Pipe({
  name: 'filterCustomer',
  standalone: true
})
export class FilterCustomerPipe implements PipeTransform {

  transform(value: Customer[], arg: string): Customer[] {
    return value.filter(a => a.name.toLowerCase().includes(arg.toLowerCase()));
  }

}
