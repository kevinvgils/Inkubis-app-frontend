import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Company } from '../company/company.model';
import { ConfigService } from '../shared/moduleconfig/config.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {}

  getAllUsers(): Observable<User[]> {
    return this.httpClient
      .get(`${this.configService.getConfig().apiEndpoint}data-api/user`, {
        headers: this.headers,
      })
      .pipe(
        map((data: any) => data),
        map((users: User[]) => {
          return users;
        })
      );
  }

  getAllCompaniesForUser(userId: number): Observable<Company[]> {
    return this.httpClient
      .get(
        `${
          this.configService.getConfig().apiEndpoint
        }data-api/company/usercompany/` + userId,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((data: any) => data),
        map((companies: Company[]) => {
          return companies;
        })
      );
  }
  getAllCompanies(): Observable<Company[]> {
    return this.httpClient
      .get(`${this.configService.getConfig().apiEndpoint}data-api/company`, {
        headers: this.headers,
      })
      .pipe(
        map((data: any) => data.companies),
        map((companies: Company[]) => {
          return companies;
        })
      );
  }

  getUserById(userId: number | undefined): Observable<User> {
    return this.httpClient
      .get<User>(
        `${this.configService.getConfig().apiEndpoint}data-api/user/` + userId,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((user: User) => {
          console.log(user);
          return user;
        })
      );
  }

  updateUser(userId: number, userInfo: any): Observable<Object> {
    return this.httpClient.put(
      `${this.configService.getConfig().apiEndpoint}data-api/user/` + userId,
      userInfo,
      {
        headers: this.headers,
      }
    );
  }
}
