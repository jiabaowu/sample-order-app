import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService
    ) {
  }

  canActivate() {
    console.log("AuthGuard");
    if (this.authService.isLoggedIn()) {
        return true;
    } else {
        window.alert("You are not logged in.");
        return false;
    }
  }
}
