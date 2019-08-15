import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'st-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public dropdown: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  public logOut(){
    this.auth.logOut();
  }
}
