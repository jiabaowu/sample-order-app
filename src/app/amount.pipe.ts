import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  currencySymbol = new Map([['USD', '$'],['GBP', '£']])

  transform(value: number, currency: string): string {
    return this.getCurrencySymbol(currency) + this.getDecimal(value);
  }

  getCurrencySymbol(currency: string): string {
     return this.currencySymbol.get(currency);
  }

  getDecimal(value: number): string {
      return (value / 100).toFixed(2);
  }

}
