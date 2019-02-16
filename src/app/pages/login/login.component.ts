import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
