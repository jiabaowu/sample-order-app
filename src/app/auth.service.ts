import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  loggedIn = false;

  loginChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  login() {
      this.loggedIn = true;
      this.loginChanged.next(this.loggedIn);
  }

  logout() {
      this.loggedIn = false;
      this.loginChanged.next(this.loggedIn);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}
