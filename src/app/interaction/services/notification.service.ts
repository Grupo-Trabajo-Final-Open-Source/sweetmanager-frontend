import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  baseUrl: string = 'https://sweetmanager.ryzeon.me';

  constructor(private http: HttpClient) { }

  getNotifications(){
    return this.http.get(`${this.baseUrl}/notifications`);
  }

}
