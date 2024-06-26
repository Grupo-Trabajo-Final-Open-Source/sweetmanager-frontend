import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer.entity";
import {BaseService} from "../../../supply-management/shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService<Customer>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/customers';
  }
}
