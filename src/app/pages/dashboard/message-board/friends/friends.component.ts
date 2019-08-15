import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { UsersService } from 'src/app/services/users.service';
import { Messages } from 'src/app/models/messanger.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'st-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit, OnDestroy {

  public messangers: Messages.Messanger[] = []
  private destroy$: Subject<boolean> = new Subject();

  constructor(public user: UsersService, public messages: MessagesService) { }

  ngOnInit() {
    this.messages.messangers.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.messangers = [];
      Object.values(data).forEach((m: any) => {
        if(m.type === "private")
          this.messangers.push(m)
      })
    })
  }

  read(convo){

  }

  displayConversation(id: string){
    this.messages.open(id);
  }

  ngOnDestroy(){
    this.destroy$.next();
  }
}