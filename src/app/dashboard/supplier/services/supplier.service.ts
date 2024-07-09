import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  baseUrl: string = 'https://sweetmanagerapi.ryzeon.me/api/v1';

  constructor(private http: HttpClient) {
  }

  getAll(){
    return this.http.get(`${this.baseUrl}/suppliers`, {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  create(supplier : any){
    return this.http.post(`${this.baseUrl}/suppliers`, {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')}),
      body: supplier
    });
  }

  update(supplier: any){
    return this.http.put(`${this.baseUrl}/suppliers`, {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')}),
      body: supplier
    });
  }

  delete(id : number){
    return this.http.delete(`${this.baseUrl}/suppliers`, {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')}),
      body: id
    });
  }

}
