import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UsersService } from './users.service';
import { WebSocketService } from '../server/web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedInUser: User = JSON.parse(localStorage.getItem("loggedInUser"));
  public isLoggedIn: boolean = this.logInCheck();
  public verify: BehaviorSubject<any> = new BehaviorSubject({success: true});

  constructor(private api: ApiService, private router: Router, private users: UsersService, private ws: WebSocketService) { }

  public userAuth(user: any){
    if(this.loggedInUser){
      // localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser))
      this.users.user = this.loggedInUser;
      this.router.navigate(['dashboard']);
    }
    return !!(this.loggedInUser);
  }

  public login(loginInfo: any){
    this.api.post('login', loginInfo).pipe(take(1)).subscribe((data: any) => {
      this.verify.next(data)
      this.loggedInUser = data.user;

      if(data.success){
        // localStorage.setItem('loggedInUser', JSON.stringify(data.user))
        this.loggedInUser = data.user
        this.users.user = this.loggedInUser;
        this.users.id = data.id;
        this.ws.emit('init', { id: data.id })
        this.router.navigate(['dashboard']);
      }
    })
  }

  public logInCheck(): boolean{
    if(this.loggedInUser){
      this.router.navigate(['dashboard']);
      return true;
    } 
    else
    {
      return false
    }
  }

  public logOut(){
    localStorage.clear();
    this.router.navigate(['']);
    location.reload();

    this.ws.emit('logout', {})
  }
}
