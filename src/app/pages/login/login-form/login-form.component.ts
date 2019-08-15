import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'st-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private auth: AuthService) { }

  err: string = '';
  loggingIn = {};

  logIn(){
    this.auth.login(this.loggingIn);
  }

  ngOnInit() {
    this.auth.verify.subscribe(data => {
      if(data.success)
      this.err = '';
    else
      this.err = 'Username/Password is Incorrect';
      
    })
  }

}
