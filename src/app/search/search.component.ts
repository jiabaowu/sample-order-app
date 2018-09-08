import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AmountPipe } from '../amount.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  users: any[];
  filteredUsers: any[];
  amountPipe: AmountPipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    this.users = [];
    this.filteredUsers = [];
    this.activatedRoute.data.subscribe((res) => {
        this.users = res.list.json();
        this.filteredUsers = this.users;
    });
    this.amountPipe = new AmountPipe();
  }

  ngOnInit() {

  }

  onKey(value: string) {
    this.filteredUsers = this.users.filter((user) => {
        return user.first_name.indexOf(value) != -1 ||
               user.last_name.indexOf(value) != -1 ||
               this.amountPipe
                 .transform(user.order_total.amount,
                            user.order_total.currency)
                 .indexOf(value) != -1;
    });
  }

  edit(id: string) {
    this.router.navigate(["/edit", id]);
  }

}
