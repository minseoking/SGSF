import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, NavigationExtras, CanLoad, Route } from '@angular/router';
import { AuthService } from '../share/service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log('F5',this.authService.isLogin);
    console.log(route);
    console.log(state);
    console.log(url);

    console.log("#1");
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  // lazy load 사용시, canLoad 사용.
  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
    // if(window.confirm("자식 라우트가 모두 로드 되었습니다. 진행하시겠습니까?")){
    //   return this.checkLogin(url);
    // }else{
    //   return false;
    // }
  }

  checkLogin(url: string): boolean {
    console.log("#2");
    console.log('isLogin',this.authService.isLogin);
    console.log('isAuthenticated', typeof sessionStorage.getItem('isAuthenticated'));
    if (sessionStorage.getItem('isAuthenticated') == 'true') {
      this.authService.isLogin = true;
      return true;
    }
    this.authService.redirectUrl = url;
    // let sessionId = 1234;
    //
    // let navigationExtras: NavigationExtras = {
    //   queryParams: { 'session_id': sessionId },
    //   fragment: 'anchor'
    // };

    this.router.navigate(['/login']);
    return false;
  }
}
