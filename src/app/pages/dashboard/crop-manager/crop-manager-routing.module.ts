import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayCropsComponent } from './display-crops/display-crops.component';
import { CropDetailsComponent } from './crop-details/crop-details.component';
import { AddCropComponent } from './add-crop/add-crop.component';

const routes: Routes = [
  { path: '', component: DisplayCropsComponent },
  { path: 'details/:id', component: CropDetailsComponent },
  { path: 'add', component: AddCropComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropManagerRoutingModule { }
