import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';
import { User } from '../models/user.model';
import { ApiService } from './api.service';
import { WebSocketService } from '../server/web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user: User = JSON.parse(localStorage.getItem('loggedInUser'));
  public id: string;

  constructor(private api: ApiService, private ws: WebSocketService) { }

  private loggedInUser(){
    // this.ws.on('logged-in-user').subscribe(data => {
    //   // this.user = data;
    // })
  }

  getUser(id){
    return this.api.get('user-by-id/'+id);
  }
}
