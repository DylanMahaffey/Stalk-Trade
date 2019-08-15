import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeManagerComponent } from './trade-manager.component';

import { OfferComponent } from './offer/offer.component';
import { NegotiationComponent } from './negotiation/negotiation.component';
import { TradingCropComponent } from './trading-crop/trading-crop.component';
import { RecievingCropComponent } from './recieving-crop/recieving-crop.component';

const routes: Routes = [
  { path: '', component: TradeManagerComponent },
  { path: 'offer/:id', component: OfferComponent },
  { path: 'negotiation/:id', component: NegotiationComponent },
  { path: 'traded/:id', component: TradingCropComponent },
  { path: 'recieving/:id', component: RecievingCropComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeManagerRoutingModule { }
