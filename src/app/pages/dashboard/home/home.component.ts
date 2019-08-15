import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'st-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: User[] = []

  constructor(private api: ApiService, private usersService: UsersService, private homeService: HomeService) { }

  ngOnInit() {
    this.api.get('users').subscribe((data: any) => {      
     this.users = Object.values(data)
    })
  }

  addFriend(friendId){
    this.homeService.addFriend({id: this.usersService.id, friendId})
  }

}
