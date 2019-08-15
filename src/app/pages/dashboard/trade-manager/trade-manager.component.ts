import { Component, OnInit } from '@angular/core';
import { TradesService } from 'src/app/services/trades.service';
import { UsersService } from 'src/app/services/users.service';
import { Crop } from 'src/app/models/crop.model';
import { Trade } from 'src/app/models/trade.model';

@Component({
  selector: 'st-trade-manager',
  templateUrl: './trade-manager.component.html',
  styleUrls: ['./trade-manager.component.scss']
})
export class TradeManagerComponent implements OnInit {

  public sent: Trade.Trade[] = [];
  public recieved: Trade.Trade[] = [];
  public allTrades: Trade.Trade[] = this.recieved.concat(this.sent);

  constructor(public user: UsersService, public trades: TradesService) { }

  ngOnInit() {
    this.trades.trades.subscribe(data => {
      this.sent = data.sent;
      this.recieved = data.recieved;
      this.allTrades = this.recieved.concat(this.sent);
    })
  }

}
