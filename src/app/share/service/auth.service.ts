import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../../model/employee/employeemodel';


@Injectable({
  providedIn: 'root'
})
export class User {
  constructor(public id: number, public name: string) { }
}

// const USERS = [
//   new User(1, '첫번째 사용자'),
//   new User(2, '두번째 사용자'),
//   new User(3, '세번째 사용자')
// ];

// export let userPromise = Promise.resolve(USERS);

@Injectable()
export class AuthService {
  URL : string = 'http://localhost:3000/';
  isLogin: boolean = false;
  redirectUrl: string;
  userId: string;
  checkidval : any;
  error : any;

  constructor(private http : HttpClient) { }

  loginAction(employeemodel:EmployeeModel) :Promise<any> {
    console.log(employeemodel);
    let user = employeemodel;
    let promise = new Promise((resolve, reject)=>{
      this.http.get(`${this.URL+'users'}?userID=${employeemodel.userId}&userPassword=${employeemodel.userPassword}`)
      .toPromise()
      .then(
        res=>{
          console.log('login',res);
          this.isLogin =Object.keys(res).length ==0 ? false:true;
          if(this.isLogin == true){
            sessionStorage.setItem(
            'isAuthenticated', JSON.stringify(this.isLogin));
          }
          console.log(Object.keys(res).length);
          console.log(resolve);
          resolve(this.isLogin);
        }
      )
    })
    // this.http.get(`${this.URL+'users'}?userID=${employeemodel.userId}&userPassword=${employeemodel.userPassword}`)
    // .subscribe
    return  promise;


    // return userPromise
    //   .then(children => children.find(children => children.id === +userId));
  }

  // loginAction(data: Object) {
  //   console.log('data : ',data,'type : ',typeof data,'??',data.valueOf());
  //   if( data.valueOf() ==0){
  //
  //   }
  //   //data = ;
  //   // let isuser = data.filter(x=>x.userId=='lms0923' && x.userPassword=='Pa$$w0rd');
  //   // if(isuser.length>0){
  //   //   this.isLogin=true;
  //   //   this.userId=isuser[0].userId;
  //   // }
  //   return ;
  //   //return Observable.if .of(true).delay(500).do(val => this.isLogin = true).do(val => this.userId = userId);
  // }

  logout(): void {
    this.isLogin = false;
    sessionStorage.clear();
    //this.router.navigate(['/login']);
  }
}
