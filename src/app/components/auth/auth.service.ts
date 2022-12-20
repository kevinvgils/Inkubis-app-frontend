import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogin } from './auth.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser$ = new BehaviorSubject<ILogin | undefined>(undefined);
  private readonly CURRENT_USER = 'currentuser';
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(
    emailAddress: string,
    password: string
  ): Observable<ILogin | undefined> {
    const credentials = {
      emailAddress: emailAddress,
      password: password,
    };

    return this.httpClient
      .post<ILogin>(`http://localhost:3000/user-auth/login`, credentials, {
        headers: this.headers,
      })
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
}
