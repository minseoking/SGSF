import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  email: String = '';
  password: String = '';

  constructor(

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
  }

  /**
   * goSignin
   * 회원가입
   */
  goSignin() {

  }

}
