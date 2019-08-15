import { Injectable } from '@angular/core';
import { WebSocketService } from '../server/web-socket.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ShellService {
  
  menuDropdown: boolean = false;

  constructor(private ws: WebSocketService, private user: UsersService) { 
    this.ws.emit('init', this.user.user);
  }
}
