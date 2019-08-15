import { Injectable } from '@angular/core';
import { WebSocketService } from '../server/web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private ws: WebSocketService) { }

  public addFriend(body){
    this.ws.emit('add-friend', body)
  }
}
