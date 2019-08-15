import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MessagesService } from 'src/app/services/messages.service';
import { TradeInterface } from 'src/app/interfaces/trade-interface';
import { Messages } from 'src/app/models/messanger.model';

@Component({
  selector: 'st-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss']
})
export class TradesComponent implements OnInit {

  public sent: TradeInterface[] = [];
  public recieved: TradeInterface[] = [];
  public messangers: Messages.Messanger[] = []

  constructor(public user: UsersService, public messages: MessagesService) { }

  ngOnInit() {
    this.messages.messangers.subscribe(data => {
      Object.values(data).forEach((m: any) => {
        if(m.type === "trade"){
          if(m.userId === this.user.id)
            this.recieved.push(m);
          else  
            this.sent.push(m);
        }
      })
    })
  }

  displayConversation(id: string){
    this.messages.open(id);
  }

}
