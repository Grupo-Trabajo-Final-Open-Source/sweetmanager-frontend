import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl = 'https://sweetmanager.ryzeon.me';

  constructor(private http: HttpClient) { }

  getPayments(){
    return this.http.get(`${this.baseUrl}/users`);
  }

  createPayment(payment: any){
    return this.http.post(`${this.baseUrl}/payments`,payment);
  }
}
