import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = 'https://sweetmanager.ryzeon.me';

  constructor(private http:HttpClient) { }

  getCompanies(){
    return this.http.get(`${this.baseUrl}/companies`);
  }

  getCompanyById(id : number){
    return this.http.get(`${this.baseUrl}/companies/${id}`);
  }

  createCompany(company: any){
    return this.http.post(`${this.baseUrl}/companies`,company);
  }

}
