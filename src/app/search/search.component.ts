import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AmountPipe } from '../amount.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  orders: any[];
  filteredOrders: any[];
  amountPipe: AmountPipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    this.orders = [];
    this.filteredOrders = [];
    this.activatedRoute.data.subscribe((res) => {
        this.orders = res.list.json();
        this.filteredOrders = this.orders;
    });
    this.amountPipe = new AmountPipe();
  }

  ngOnInit() {

  }

  onKey(value: string) {
    this.filteredOrders = this.orders.filter((order) => {
        return order.first_name.indexOf(value) != -1 ||
               order.last_name.indexOf(value) != -1 ||
               this.amountPipe
                 .transform(order.order_total.amount,
                            order.order_total.currency)
                 .indexOf(value) != -1;
    });
  }

  edit(id: string) {
    this.router.navigate(["/edit", id]);
  }

}
