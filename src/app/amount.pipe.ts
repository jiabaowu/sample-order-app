import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  currencySymbol = new Map([['USD', '$'],['GBP', '£']])

  transform(value: number, currency: string): string {
    return this.currencySymbol.get(currency) + (value / 100).toFixed(2);
  }

}
