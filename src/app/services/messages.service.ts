import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UsersService } from './users.service';
import { Messages } from '../models/messanger.model';
import { WebSocketService } from '../server/web-socket.service';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public openMessages: string[] = [];

  public messangers: BehaviorSubject<any> = new BehaviorSubject({});
  
  constructor(private api: ApiService, private user: UsersService, private ws: WebSocketService) { 
    this.watchMessangers();
    this.ws.emit('user-messangers', { id: this.user.id })
  }

  private watchMessangers(){
    this.api.get('user-messangers/'+this.user.id)
    .pipe(take(1))
    .subscribe(data => {
      this.messangers.next(data);
    })

    this.ws.on('new-messanger').subscribe(data => {
      let messangers = this.messangers.value;
      messangers[data.id] = data

      this.ws.emit('join-room', { id: data.id })
      this.messangers.next(messangers);
    })

    this.ws.on('new-message').subscribe(data => {
      this.messangers.value[data.messangerId].messages.push(data.message)
    })

    this.ws.on('update-messanger').subscribe(data => {
      let messangers = this.messangers.value;
      messangers[data.id].members[this.user.id].unread = data.members[this.user.id].unread

      this.openMessages.forEach(mid => {
        this.read(mid);
      })
    })
  }

  getMessangerName(members){
    const user: any = Object.values(members).find((m: any) => { return  m.id !== this.user.id })
     return user.username;
  }
  
  read(mid: string){
    this.messangers.value[mid].members[this.user.id].unread = 0;
    this.ws.emit('read-messanger',{ messangerId: mid, user: this.user.id });
  }

  postMessage(message: Messages.Message, convoId: number){
    this.ws.emit('add-message', { messangerId: convoId, message: message })
  }

  open(mid){
    if(this.openMessages.filter((id: any) => {
      return(id===mid)}).length===0
    )
    this.read(mid);
    this.openMessages.push(mid);
    this.updateOpen();
  }

  close(id: number){
    this.openMessages = this.openMessages.filter((convo: any) => {
      return (convo !==id)
    })
    this.updateOpen();
  }

  private updateOpen(){
    localStorage.setItem('openMessages', JSON.stringify(this.openMessages))
  }
}
