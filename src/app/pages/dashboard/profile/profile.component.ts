import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'st-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public user: UsersService) { }

  ngOnInit() {
  }

  public starCount(stars){
    let rating
    stars.forEach(r => {
      if(!rating)
        rating = r;

      rating = (rating + r) / 2;
    });
    return Math.round(rating);
  }
}
