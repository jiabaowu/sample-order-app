import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  order: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    this.activatedRoute.data.subscribe((res) => {
        this.order = res.order.json();
    });
  }

  ngOnInit() {
  }

  save() {
    console.log('save');
  }

  cancel() {
    this.router.navigate(["search"]);
  }

  delete() {
    let res = window.confirm('Delete this order. Are you sure?');
    if (res) {
        console.log('deleted');
        this.router.navigate(["search"]);
    } else {
        console.log('canceled');
    }
  }

}
