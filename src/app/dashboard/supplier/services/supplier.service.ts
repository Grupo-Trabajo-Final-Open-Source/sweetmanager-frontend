import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  baseUrl: string = 'https://sweetmanagerapi.ryzeon.me/api/v1/providers';

  constructor(private http: HttpClient) {
  }

  getAll(){
    return this.http.get(`${this.baseUrl}`, {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type' : 'application/json',})
    });
  }

  create(supplier : any){
    return this.http.post(`${this.baseUrl}`, JSON.stringify(supplier),{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type' : 'application/json',})
    });
  }

  update(supplier: any){
    return this.http.put(`${this.baseUrl}`, JSON.stringify(supplier),{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type' : 'application/json',})
    });
  }

  delete(id : number){
    return this.http.delete(`${this.baseUrl}/${id}`, {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type' : 'application/json',})
    });
  }

}
