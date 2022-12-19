import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogin } from './auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<ILogin> {
    const headers = new HttpHeaders({
      //'Access-Control-Allow-Origin': '*',
      //Authorization: `${token}`,
    });
    return this.httpClient.get<ILogin>(`http://localhost:3000/login`, {
      headers: headers,
    });
  }
}
