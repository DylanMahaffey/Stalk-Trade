import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { trigger, transition, animate, style, state } from '@angular/animations'


@Component({
  selector: 'st-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss'],
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
export class MessageBoardComponent implements OnInit {

  conversationsList: string = "friends";

  constructor(public messages: MessagesService) { }

  ngOnInit() {
  }
}
