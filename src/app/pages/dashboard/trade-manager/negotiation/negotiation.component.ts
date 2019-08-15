import { Component, OnInit } from '@angular/core';
import { TradesService } from 'src/app/services/trades.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'st-negotiation',
  templateUrl: './negotiation.component.html',
  styleUrls: ['./negotiation.component.scss']
})
export class NegotiationComponent implements OnInit {

  public id = +this.activeRoute.snapshot.paramMap.get('id');
  public trade = this.trades.getTrade(this.id);

  public userId = this.user.user.id;

  constructor(public trades: TradesService, public activeRoute: ActivatedRoute, private user: UsersService) { }

  ngOnInit() {
  }

}
