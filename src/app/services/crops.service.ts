import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators'

import { ApiService } from './api.service';
import { UsersService } from './users.service';
import { Crop } from '../models/crop.model';
import { WebSocketService } from '../server/web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class CropsService {

  public myCrops: Crop[] = [];
  public watchList: Crop[] = [];

  public userCrops: BehaviorSubject<object> = new BehaviorSubject({});

  constructor(private api: ApiService, private user: UsersService, private router: Router, private ws: WebSocketService) { 
    this.watchCrops();
    this.ws.emit('user-crops', { id: this.user.user.id })
  }

  watchCrops(){
    this.ws.on('user-crops').subscribe(data => {
      this.userCrops.next(data);
    })
  }

  getCropsById(id){
    return this.api.get('user-crops/'+id);
  }

  getDetails(id: number): Observable<any>{
    return this.api.get('crop-by-id/'+id);
  }

  addCrop(crop: Crop){
    crop = new Crop(
      crop.id,
      crop.userId,
      crop.cropName,
      crop.cropType,
      crop.catagory,
      crop.variety,
      crop.imgSrc,
      crop.harvested,
      crop.harvestDate,
      crop.harvestQuantity,
      crop.details
    )
    this.ws.emit('add-crop', crop);
    this.router.navigate(['dashboard','crop-manager']);
  }
}
