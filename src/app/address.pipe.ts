import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(a: any): string {
    return `${a.address1}, ${a.address2},
            ${a.city}, ${a.state},
            ${a.zip}`;
  }

}
