import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  order: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: Http
    ) {
    this.activatedRoute.data.subscribe((res) => {
        this.order = res.order.json();
    });
  }

  ngOnInit() {
  }

  save() {
    this.http.put('https://fierce-plains-25599.herokuapp.com/api/orders/' + this.order.id, this.order).subscribe(() => {
      console.log('saved');
    });
  }

  cancel() {
    this.router.navigate(["search"]);
  }

  delete() {
    let res = window.confirm('Delete this order. Are you sure?');
    if (res) {
        this.http.delete('https://fierce-plains-25599.herokuapp.com/api/orders/' + this.order.id).subscribe(() => {
          console.log('deleted');
        });
        this.router.navigate(["search"]);
    } else {
        console.log('canceled');
    }
  }

}
