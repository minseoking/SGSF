import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String = '';
  password: String = '';

  constructor(
    private loginService: LoginService
  ) {

  }

  ngOnInit() {

  }

  /**
   * goLogin
   * 로그인
   */
  goLogin() {
    console.log('loginParam : ', this.email, this.password);

    this.loginService.login({
      email: this.email,
      password: this.password
    });
  }

  /**
   * goSignin
   * 회원가입
   */
  goSignin() {

  }
}
