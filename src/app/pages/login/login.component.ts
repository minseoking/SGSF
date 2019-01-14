import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginParam = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {

  }

  /**
   * goLogin
   * 로그인
   */
  goLogin() {
    console.log('goLogin : ', this.loginParam);
    location.href = '/';
  }

  /**
   * goSignin
   * 회원가입
   */
  goSignin() {

  }

}
