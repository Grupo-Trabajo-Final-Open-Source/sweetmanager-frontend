import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl = 'https://sweetmanager.ryzeon.me';

  constructor(private http: HttpClient) { }

  getPayments(){
    return this.http.get(`${this.baseUrl}/payments`);
  }

  createPayment(payment: any){
    return this.http.post(`${this.baseUrl}/payments`,payment);
  }

}
