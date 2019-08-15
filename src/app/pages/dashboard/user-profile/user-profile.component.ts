import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, takeUntil } from 'rxjs/operators'

import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { FriendsService } from 'src/app/services/friends.service';
import { Crop } from 'src/app/models/crop.model';
import { Subject } from 'rxjs';
import { CropsService } from 'src/app/services/crops.service';

@Component({
  selector: 'st-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  public uid: string;
  public user: User;
  public friends: User[];
  public crops: Crop[];

  private destroy$: Subject<boolean> = new Subject();

  constructor(
    private router: ActivatedRoute, 
    private userService: UsersService, 
    private friendsService: FriendsService,
    private cropsService: CropsService
    ) { }

  ngOnInit() {
    this.router.params.pipe(takeUntil(this.destroy$)).subscribe(id => {
      this.uid = id.id;

      this.getUser();
    })
  }

  public getUser(){
    this.userService.getUser(this.uid).pipe(take(1)).subscribe((data: any) => {
      this.user = data      
      
      this.getFriends();
      this.getCrops();
    })
  }

  public getFriends(){
    this.friendsService.getFriends(this.uid).pipe(take(1)).subscribe((data: any) => {
      this.friends = data;
    })
  }

  public getCrops(){
    this.cropsService.getCropsById(this.uid).pipe(take(1)).subscribe((data: any) => {
      this.crops = data;
    })
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

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
