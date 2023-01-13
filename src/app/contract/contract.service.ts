import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { IContract } from './contract.interface';

@Injectable({ providedIn: 'root' })
export class ContractService {
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient: HttpClient, private router: Router) {}

  contractCreateNextLinking(currentComp: string, currentLink: boolean = true){
    const components = [
      'contractinfo',
      'contractsignees',
      'processingpurposes',
      'certification',
      'thirdparty',
      'datasubjectcategory',
      'datacategory',
      'specialdatacategory',
      'spoc',
      'verify',
    ];
    if(currentLink){
      return currentComp;
    } else{
      return components[components.indexOf(currentComp) +1];
    }
  }

  contract(
    company: number,
    questions: any
  ): Observable<IContract | undefined> {
    const contract = {
      ...questions,
      company: company
    }

    return this.httpClient
      .post(`http://localhost:3000/data-api/contract`, contract, {
        headers: this.headers,
      })
      .pipe(
        tap(console.log),
        catchError((error) => {
          console.log('error:', error);
          console.log('error.message:', error.message);
          console.log('error.error.message:', error.error.message);
          return of(undefined);
        })
      );
  }
}
