import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { AmountPipe } from '../amount.pipe';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  model: any;
  decimalAmount: string;
  currencySymbol: string;

  genders = ['MALE', 'FEMALE'];
  amountPipe: AmountPipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: Http
    ) {
    this.amountPipe = new AmountPipe();
    this.activatedRoute.data.subscribe((res) => {
        this.model = res.order.json();
        this.decimalAmount = this.amountPipe.getDecimal(
          this.model.order_total.amount);
        this.currencySymbol = this.amountPipe.getCurrencySymbol(
          this.model.order_total.currency);
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.model.order_total.amount = parseFloat(this.decimalAmount) * 100;
    this.http.put('https://fierce-plains-25599.herokuapp.com/api/orders/' + this.model.id, this.model).subscribe(() => {
      console.log('saved');
    });
  }

  cancel() {
    this.router.navigate(["search"]);
  }

  delete() {
    let res = window.confirm('Delete this order. Are you sure?');
    if (res) {
        this.http.delete('https://fierce-plains-25599.herokuapp.com/api/orders/' + this.model.id).subscribe(() => {
          console.log('deleted');
        });
        this.router.navigate(["search"]);
    } else {
        console.log('canceled');
    }
  }

}
