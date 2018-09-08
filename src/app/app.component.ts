import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    this.loggedIn = this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.authService.loginChanged.subscribe( value => {
        this.loggedIn = value;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }

}
