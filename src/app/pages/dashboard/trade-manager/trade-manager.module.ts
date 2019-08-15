import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradeManagerRoutingModule } from './trade-manager-routing.module';

import { OfferComponent } from './offer/offer.component';
import { NegotiationComponent } from './negotiation/negotiation.component';
import { TradingCropComponent } from './trading-crop/trading-crop.component';
import { RecievingCropComponent } from './recieving-crop/recieving-crop.component';
import { TradeManagerComponent } from './trade-manager.component';

@NgModule({
  declarations: [
    TradeManagerComponent,
    OfferComponent,
    NegotiationComponent,
    TradingCropComponent,
    RecievingCropComponent
  ],
  imports: [
    CommonModule,
    TradeManagerRoutingModule
  ]
})
export class TradeManagerModule { }
