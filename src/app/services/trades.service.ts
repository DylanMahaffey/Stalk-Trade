import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { ApiService } from './api.service';
import { UsersService } from './users.service';
import { Trade } from '../models/trade.model';
import { Messages } from '../models/messanger.model';
import { MessagesService } from './messages.service';
import { WebSocketService } from '../server/web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class TradesService {

  public trades: BehaviorSubject<any> = new BehaviorSubject({sent: [], recieved: []})
  

  constructor(private api: ApiService, private user: UsersService, private messageService: MessagesService, private ws: WebSocketService) { 
    this.watchTrades();
    this.ws.emit('user-trades', { id: this.user.user.id })
  }

  watchTrades(){
    console.log('watching trades...');
    
    this.ws.on('user-trades').subscribe(data => {
      this.trades.next(data)
    })
  }
  
  getTrade(id: number): Observable<any>{
    return this.api.get('trade-by-id/'+id);
  }

  acceptOffer(trade: Trade.Trade){

  }

  acceptTerms(trade: Trade.Trade, userId: number){

  }
}
