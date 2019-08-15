import { Component, OnInit, Input, OnDestroy, Output } from '@angular/core';
import { takeUntil } from 'rxjs/operators'
import { UsersService } from 'src/app/services/users.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Messages } from 'src/app/models/messanger.model';
import { trigger, transition, animate, style, state } from '@angular/animations'
import { Subject } from 'rxjs';




@Component({
  selector: 'st-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  animations: [
    trigger('rise', [
      state('void', style({height: 0})),
      transition(':enter', [
        animate(200)
      ]),
      transition(':leave', [
        animate(200)
      ])
    ])
  ]
})
export class ConversationComponent implements OnInit, OnDestroy {

  @Input() id: string;
  public convo: Messages.Messanger;
  @Output() read: boolean;
  public message: Messages.Message = new Messages.Message(0,this.user.user.firstName,this.user.user.id,"")

  constructor(public user: UsersService, private messages: MessagesService) { }

  ngOnInit() {
      this.convo = this.messages.messangers.value[this.id]
  }

  closeConversation(){
    this.messages.close(this.convo.id);
  }

  post(){
    this.messages.postMessage(this.message, this.convo.id)
  }

  ngOnDestroy(){
  }
}



// 
// 
// SORT OUT THE PRIVATE MESSANGERS!!!
// 
// 