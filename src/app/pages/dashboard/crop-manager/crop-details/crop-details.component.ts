import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators'

import { CropsService } from 'src/app/services/crops.service';
import { Crop } from 'src/app/models/crop.model';

@Component({
  selector: 'st-crop-details',
  templateUrl: './crop-details.component.html',
  styleUrls: ['./crop-details.component.scss']
})
export class CropDetailsComponent implements OnInit {

  private cropId: number = +this.router.snapshot.paramMap.get('id');
  public cropDetails: Crop;

  constructor(private crops: CropsService,private router: ActivatedRoute) { }

  ngOnInit() {
    this.crops.getDetails(this.cropId).pipe(take(1)).subscribe(data => {
      this.cropDetails = data;
    })
  }

}
