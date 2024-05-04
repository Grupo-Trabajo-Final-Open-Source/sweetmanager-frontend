import { Injectable } from '@angular/core';
import {Supply} from "../model/supply.entity";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class SupplyService extends BaseService<Supply>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/supplies';
  }
}
