import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Messages } from 'src/app/models/messanger.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'st-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit, OnDestroy {

  public messangers: Messages.Messanger[] = []
  private destroy$: Subject<boolean> = new Subject();

  constructor(public user: UsersService, public messages: MessagesService) { }

  ngOnInit() {
    this.messages.messangers.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.messangers = [];
      Object.values(data).forEach((m: any) => {
        if(m.type === "group")
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
