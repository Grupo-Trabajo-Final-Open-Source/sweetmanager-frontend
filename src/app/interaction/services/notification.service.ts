import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  baseUrl: string = 'https://sweetmanagerapi.ryzeon.me/api/v1';

  constructor(private http: HttpClient) { }

  getNotifications(){

    return this.http.get(`${this.baseUrl}/notifications`, {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

}
