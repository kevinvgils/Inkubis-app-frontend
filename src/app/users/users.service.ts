import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Company } from './company.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  
  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.httpClient
    .get(`http://localhost:3000/data-api/user`, {
      headers: this.headers,
    })
    .pipe(
      map((data: any) => data),
      map((users: User[]) => {
        return users;
      })
    )
  }

  getAllCompanies(): Observable<Company[]> {
    return this.httpClient
    .get(`http://localhost:3000/data-api/company`, {
      headers: this.headers,
    })
    .pipe(
      map((data: any) => data),
      map((companies: Company[]) => {
        return companies;
      })
    )
  }

  getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(
      `http://localhost:3000/data-api/user/` + userId,
      {
        headers: this.headers,
      }
    )
    .pipe(
      map((user: User) => {
        console.log(user);
        return user
      })
    );
  }

  updateUser(userId: number, userInfo: any): Observable<Object> {
    return this.httpClient.put(
      `http://localhost:3000/data-api/user/` + userId,
      userInfo,
      {
        headers: this.headers,
      }
    )
  }
}
