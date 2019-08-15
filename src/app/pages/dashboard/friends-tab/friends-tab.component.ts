import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FriendsService } from 'src/app/services/friends.service';
import { UsersService } from 'src/app/services/users.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'st-friends-tab',
  templateUrl: './friends-tab.component.html',
  styleUrls: ['./friends-tab.component.scss']
})
export class FriendsTabComponent implements OnInit {

  public search: User[] = [];
  public friends: User[] = [];
  public groups = [];

  constructor(private usersService: UsersService, private friendsService: FriendsService) { }

  ngOnInit() {
    this.friendsService.getFriends(this.usersService.id).pipe(take(1)).subscribe((data: any) => {
      console.log(data);
      
      this.friends = data;
    })
  }

  log(x){
    console.log(x)
  }
}
