import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PdfComponent } from './pdf.component';
import { IPDF } from './pdf.interface'

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private httpClient: HttpClient) {}



  getContractByIdAsObservable(id: string): Observable<IPDF> {
    //console.log('getUserByIdAsObservable aangeroepen');
    //const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      //'Access-Control-Allow-Origin': '*',
      //Authorization: `${token}`,
    });
    return this.httpClient.get<IPDF>(
      //`${environment.API_URL}/data-api/user/${id}`,
       `http://localhost:3000/contract/${id}`,
      {
        headers: headers,
      }
    );
  }
}
