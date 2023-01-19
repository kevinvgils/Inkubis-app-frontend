import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { IContract } from './contract.interface';
import { ConfigService } from '../shared/moduleconfig/config.service';

@Injectable({ providedIn: 'root' })
export class ContractService {
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private configService: ConfigService
  ) {}

  contractCreateNextLinking(currentComp: string, currentLink: boolean = true) {
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
    if (currentLink) {
      return currentComp;
    } else {
      return components[components.indexOf(currentComp) + 1];
    }
  }

  contract(company: number, questions: any): Observable<IContract | undefined> {
    const contract = {
      ...questions,
      company: company,
    };

    return this.httpClient
      .post(
        `${this.configService.getConfig().apiEndpoint}data-api/contract`,
        contract,
        {
          headers: this.headers,
        }
      )
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

  getAllContracts(): Observable<IContract[]> {
    return this.httpClient
      .get(`${this.configService.getConfig().apiEndpoint}data-api/contract`, {
        headers: this.headers,
      })
      .pipe(
        map((data: any) => data),
        map((contracts: IContract[]) => {
          return contracts;
        })
      );
  }

  getAllContractsForUser(): Observable<IContract[]> {
    return this.httpClient
      .get(
        `${this.configService.getConfig().apiEndpoint}data-api/contract/user`,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((data: any) => data),
        map((contracts: IContract[]) => {
          return contracts;
        })
      );
  }

  getContractById(contractId: number): Observable<IContract> {
    return this.httpClient
      .get(
        `${this.configService.getConfig().apiEndpoint}data-api/contract/` +
          contractId,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((data: any) => data),
        map((contract: IContract) => {
          return contract;
        })
      );
  }

  deleteContract(contractId: number): Observable<any> {
    return this.httpClient.delete(
      `${this.configService.getConfig().apiEndpoint}data-api/contract/` +
        contractId,
      {
        headers: this.headers,
      }
    );
  }

  updateContract(contractId: number, contractInfo: any): Observable<Object> {
    return this.httpClient.put(
      `${this.configService.getConfig().apiEndpoint}data-api/contract/` +
        contractId,
      contractInfo,
      {
        headers: this.headers,
      }
    );
  }
}
