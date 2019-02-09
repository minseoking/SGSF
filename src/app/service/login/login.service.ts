import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public router: Router,
  ) {

  }

  /**
   * login
   * 로그인
   * @param loginData 로그인파라메터
   */
  login(loginData: any) {
    console.log('login-Service : ', loginData);
    // this.router.navigate(['/board/posts']);
  }
}
