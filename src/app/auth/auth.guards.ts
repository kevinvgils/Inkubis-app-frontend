import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from '../users/users.service';
import { ILogin, IToken } from './auth.interface';
import { AuthService } from './auth.service';

@Injectable()
export class LoggedInAuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    console.log('canActivate LoggedIn');
    return this.authService.currentUser$.pipe(
      map((user: IToken | undefined) => {
        if (user) {
          return true;
        } else {
          console.log('not logged in, reroute to /login');
          this.router.navigate(['login']);
          return false;
        }
      })
    );
  }

  canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivateChild LoggedIn');
    return this.canActivate();
  }
}

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private userService: UsersService, private router: Router) {}

  canActivate(): Observable<boolean> {
    console.log('canActivate Admin');
    return this.authService.currentUser$.pipe(
      map((user: IToken | undefined) => {
        if (user) {
          let loggedIn = this.authService.decodeJwtToken(user.token) as any;
          if(loggedIn.role === 'admin') {
            return true
          } else {
            this.router.navigate(['/']);
            return false;
          }
        } else {
          console.log('not logged in, reroute to /login');
          this.router.navigate(['login']);
          return false;
        }
      })
    );
  }

  canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivateChild LoggedIn');
    return this.canActivate();
  }
}
