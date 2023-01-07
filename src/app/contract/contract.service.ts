import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormComponent } from '../form/form.component';
import { Router } from '@angular/router';
import { IContract } from './contract.interface';

export class ContractService {
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient: HttpClient, private router: Router) {}

  contract(
    company: number,
    user: number,
    questions: any
  ): Observable<IContract | undefined> {
    //let result2 = '';
    //console.log("first", Object.entries(questions).at(0)?.at(1));
    //const result2 = Object.entries(questions).at(0)?.at(1);

    console.log(questions[0]['firstQuestion']);

    /*let go = Object.entries(questions).at(0)?.at(1);

    const result2 = (Object.keys(go) as (keyof typeof go)[]).values["0"];
    console.log(result2);
    console.log(result2);
    
    /*Object.entries(questions).at(0)?.at(1).find(([key, value]) => {
        if (value === 'accounting') {
          result2 = key;
          return true;
        }
      
        return false;
      });*/

    const contract = {
      company: {
        id: company,
        name: '',
      },
      user: user,
      firstQuestion: questions[0]['firstQuestion'],
      secondQuestion: questions[0]['secondQuestion'],
      thirdQuestion: questions[0]['thirdQuestion'],
      lastQuestion: questions[0]['lastQuestion'],
    };
    //console.log(typeof(questions))
    return this.httpClient
      .post<IContract>(`http://localhost:3000/contract`, contract, {
        headers: this.headers,
      })
      .pipe(
        tap(console.log),
        /*map((data: any) => {
          localStorage.setItem(this.CURRENT_USER, JSON.stringify(data));
          this.currentUser$.next(data);
          return data;
        }),*/
        catchError((error) => {
          console.log('error:', error);
          console.log('error.message:', error.message);
          console.log('error.error.message:', error.error.message);
          return of(undefined);
        })
      );
  }
}
