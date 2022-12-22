import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogin, IRegister } from './auth.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser$ = new BehaviorSubject<ILogin | undefined>(undefined);
  private readonly CURRENT_USER = 'currentuser';
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.getAuthorizationToken() || '',
  });

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getUserFromLocalStorage()
      .pipe(
        switchMap((user: ILogin | undefined) => {
          if (user) {
            console.log('User found in local storage');
            console.log(user);
            this.currentUser$.next(user);
            return of(user);
          } else {
            return of(undefined);
          }
        })
      )
      .subscribe();
  }

  login(
    emailAddress: string,
    password: string
  ): Observable<ILogin | undefined> {
    const credentials = {
      emailAddress: emailAddress,
      password: password,
    };

    return this.httpClient
      .post<ILogin>(
        `http://localhost:3000/auth-api/user-auth/login`,
        credentials,
        {
          headers: this.headers,
        }
      )
      .pipe(
        tap(console.log),
        map((data: any) => {
          localStorage.setItem(this.CURRENT_USER, JSON.stringify(data));
          this.currentUser$.next(data);
          return data;
        }),
        catchError((error) => {
          console.log('error:', error);
          console.log('error.message:', error.message);
          console.log('error.error.message:', error.error.message);
          return of(undefined);
        })
      );
  }

  register(userData: IRegister): Observable<IRegister | undefined> {
    const isAdmin = userData.isAdmin === true ? 'admin' : 'sales';
    userData.role = isAdmin;
    console.log(userData);
    return this.httpClient
      .post<IRegister>(`http://localhost:3000/auth-api/user-auth`, userData, {
        headers: this.headers,
      })
      .pipe(
        catchError((error) => {
          console.log('error:', error);
          console.log('error.message:', error.message);
          console.log('error.error.message:', error.error.message);
          return of(undefined);
        })
      );
  }

  logout(): void {
    this.router
      .navigate(['login'])
      .then((success) => {
        if (success) {
          console.log('logout - removing local user info');
          localStorage.removeItem(this.CURRENT_USER);
          this.currentUser$.next(undefined);
        } else {
          console.log('navigate result:', success);
        }
      })
      .catch((error) => console.log('not logged out!'));
  }

  getUserFromLocalStorage(): Observable<ILogin | undefined> {
    const user = localStorage.getItem(this.CURRENT_USER);
    if (user) {
      const localUser = JSON.parse(user);
      return of(localUser);
    } else {
      return of(undefined);
    }
  }

  getAuthorizationToken(): string | undefined {
    const user = localStorage.getItem(this.CURRENT_USER);
    if (user) {
      const localUser = JSON.parse(user);
      return localUser.token;
    }
    return undefined;
  }
}
