import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  baseUrl = 'https://sweetmanagerapi.ryzeon.me/api/v1';

  constructor(private http: HttpClient) { }

  getSubscriptions(){
    return this.http.get(`${this.baseUrl}/subscriptions`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

}
