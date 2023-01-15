import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Company } from './company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  readonly apiURL = environment.apiurl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient, private router: Router) {}

  create(company: Company): Observable<Company> {
    return this.http
      .post<Company>(
        `${this.apiURL}/company`,
        JSON.stringify(company),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getAll(): Observable<Company[]> {
    return this.http
      .get<Company[]>(`${this.apiURL}/company`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getById(id: number): Observable<Company> {
    return this.http
      .get<Company>(`${this.apiURL}/company/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  update(id: number, Company: Company): Observable<Company> {
    return this.http
      .put<Company>(
        this.apiURL + '/company/' + id,
        JSON.stringify(Company),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  delete(id: number) {
    return this.http
      .delete<Company>(`${this.apiURL}/company/${id}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
