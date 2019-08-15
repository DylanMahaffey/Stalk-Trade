import { Component, OnInit } from '@angular/core';
import { TradesService } from 'src/app/services/trades.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'st-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  public id = +this.activeRoute.snapshot.paramMap.get('id');
  public trade = this.trades.getTrade(this.id);

  constructor(public trades: TradesService, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
