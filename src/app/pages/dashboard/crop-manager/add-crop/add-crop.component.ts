import { Component, OnInit } from '@angular/core';
import { Crop } from 'src/app/models/crop.model';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CropsService } from 'src/app/services/crops.service';

@Component({
  selector: 'st-add-crop',
  templateUrl: './add-crop.component.html',
  styleUrls: ['./add-crop.component.scss']
})
export class AddCropComponent implements OnInit {

  public newCrop: FormGroup;
  public imgSrc: string;

  constructor(private crop: CropsService, private user: UsersService, private fb: FormBuilder) { }

  ngOnInit() {
    this.newCrop = this.fb.group({
      id: 0,
      userId: this.user.user.id,
      cropName: ['', Validators.compose([Validators.required])],
      cropType: ['', Validators.compose([Validators.required])],
      catagory: ['', Validators.compose([Validators.required])],
      variety: ['', Validators.compose([Validators.required])],
      imgSrc: ['', Validators.compose([Validators.required])],
      harvested: [false],
      harvestDate: ['', Validators.compose([Validators.required])],
      harvestQuantity: ['', Validators.compose([Validators.required, Validators.min(1), this.isNumber])],
      details: ['', Validators.compose([Validators.required])]
    })
  }

  isNumber(control: FormControl){
    if(Number.isNaN(control.value))
      return {number: "is not a number"}
    else
      return null
  }

  submit(){
    this.crop.addCrop(this.newCrop.value)
  }

}
