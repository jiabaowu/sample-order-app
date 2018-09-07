import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  orders: any[];
  filteredOrders: any[];

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
  }

  ngOnInit() {

  }

  onKey(value: string) {
    this.filteredOrders = this.orders.filter((order) => {
        return order.title.indexOf(value) != -1;
    });
  }

  edit(id: string) {
    this.router.navigate(["/edit", id]);
  }

}
