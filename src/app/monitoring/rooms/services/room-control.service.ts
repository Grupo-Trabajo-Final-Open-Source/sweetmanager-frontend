import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {Room} from "../model/room.entity";

@Injectable({
  providedIn: 'root'
})
export class RoomControlService extends BaseService<Room> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/rooms';
  }
}
