import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  baseUrl = 'https://sweetmanager.ryzeon.me';

  constructor(private http: HttpClient) { }

  getSubscriptions(){
    return this.http.get(`${this.baseUrl}/subscriptions`);
  }

}
