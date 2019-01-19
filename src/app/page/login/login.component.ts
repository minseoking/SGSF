import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../share/service/auth.service';
import { EmployeeModel } from '../../model/employee/employeemodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  userId: string;
  userPassword: string;
  idErrorMessage: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    console.log("#3");
    console.log(authService)
    console.log(authService.isLogin)
    console.log(router)
    this.setMessage();
  }

  ngOnInit() {
  }
  
  setMessage() {
    this.message = (this.authService.isLogin ? this.authService.userId + '님 환영합니다.' : '로그인 필요');
  }

  private doLogin() {
    this.setMessage();
    if (this.authService.isLogin) {
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/page';
      let navigationExtras: NavigationExtras = {
        preserveQueryParams: true,
        preserveFragment: true
      };
      this.router.navigate([redirect], navigationExtras);
    } else {
      alert('로그인에 실패했습니다.');
    }
  }

  login() {
    if (!this.userId) {
      this.idErrorMessage = '아이디를 입력해주세요';
      return;
    } else {
      this.idErrorMessage = null;
    }

    this.message = '로그인을 진행해주세요';
    let employee: EmployeeModel = {
      userId: this.userId,
      userPassword: this.userPassword
    }
    return this.authService.loginAction(employee)
      .then(
        () => this.doLogin()
      );


    // .subscribe(
    //   ()=>this.doLogin(),
    //   error=>console.log('error',error));

    // .then(children => {
    //   if (children) {
    //     this.authService.loginAction(this.userId).subscribe(() => );
    //   } else {
    //     alert('아이디가 없습니다');
    //   }
    //   this.setMessage();
    // });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }



}
