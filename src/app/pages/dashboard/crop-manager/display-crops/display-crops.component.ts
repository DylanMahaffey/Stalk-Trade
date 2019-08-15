import { Component, OnInit } from '@angular/core';
import { CropsService } from 'src/app/services/crops.service';
import { Crop } from 'src/app/models/crop.model';

@Component({
  selector: 'st-display-crops',
  templateUrl: './display-crops.component.html',
  styleUrls: ['./display-crops.component.scss']
})
export class DisplayCropsComponent implements OnInit {

  public userCrops: Crop[] = [];

  constructor(public crops: CropsService) { }

  ngOnInit() {
    this.crops.userCrops.subscribe(data => {
      this.userCrops = [];
      Object.keys(data).forEach(cid => {
        this.userCrops.push(data[cid])
      }) 
    })
  }

  filter(type: string){
    
  }

}
