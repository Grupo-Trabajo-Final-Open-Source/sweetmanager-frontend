import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl = 'https://sweetmanagerapi.ryzeon.me/api/v1';

  constructor(private http: HttpClient) { }

  getPayments(){
    return this.http.get(`${this.baseUrl}/payments`, {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  createPayment(payment: any){
    return this.http.post(`${this.baseUrl}/payments`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')}),
      body: payment
    });
  }

}
