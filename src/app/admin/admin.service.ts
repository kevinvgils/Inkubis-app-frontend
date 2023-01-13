import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Contract } from '../contract/contract'
import { IContract } from '../contract/contract.interface';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private readonly headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private httpClient: HttpClient) {}

    getAllContracts(): Observable<IContract[]> {
        return this.httpClient
        .get(`http://localhost:3000/data-api/contract`, {
            headers: this.headers,
        })
        .pipe(
            map((data: any) => data),
            map((contracts: IContract[]) => {
                return contracts;
            })
        )
    }

    deleteContract(contractId: number): Observable<any> {
        return this.httpClient
        .delete(`http://localhost:3000/data-api/contract/` + contractId, {
            headers: this.headers,
        })
    }
}