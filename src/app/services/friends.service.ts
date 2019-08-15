import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private user: UsersService, private api: ApiService) { }

  getFriends(id){
    return this.api.post('friends', { id });
  }
}
