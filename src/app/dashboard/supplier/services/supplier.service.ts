import { Injectable } from '@angular/core';
import {Supplier} from "../models/supplier.entity";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../../supply-management/shared/services/base.service";


@Injectable({
  providedIn: 'root'
})
export class SupplierService extends BaseService<Supplier>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/providers';
  }
}
