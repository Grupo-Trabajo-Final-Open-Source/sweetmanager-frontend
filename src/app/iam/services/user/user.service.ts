import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user/user.entity";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://sweetmanager.ryzeon.me';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUserById(id : number){
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  getUserFromResponse(response: any){
    return new User(
      response.id,
      response['name'],
      response['password'],
      response['email'],
      response['company'],
      response['role'],
    )
  }

  createUser(user: any){
    return this.http.post(`${this.baseUrl}/users`,user);
  }
}
