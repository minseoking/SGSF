import { Injectable } from '@angular/core';

import { Vmquerymodel } from '../../model/vm/vmquerymodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Apiresultmodel } from '../../model/vm/apiresultmodel';

let headers = new HttpHeaders();
//headers = headers.append('Authorization', this.authHeader);
headers = headers.append('Accept', 'application/json');
headers = headers.append('Content-Type', 'application/json');
// headers = headers.append('Method', 'application/json');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'my-auth-token'
  })
};

// let headers = new Headers();
// headers.append('Content-Type', 'application/json');
// // headers.append('authentication', `${student.token}`);
//
// let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})
export class VapiService {
  URL : string = 'http://10.200.250.204:8085/';

  constructor(private http : HttpClient) { }

  public getDesktopPoolAllList(vmquerymodel : Vmquerymodel){
    console.log(this.URL);
    console.log(httpOptions);
    return this.http.post<Apiresultmodel>(this.URL+'horizon/getDesktopPoolAllList',vmquerymodel,httpOptions);

    }
  public createLinkedFloatingDesktopPool(vmquerymodel : Vmquerymodel){
    console.log(vmquerymodel);
    console.log(httpOptions);
    console.log("#lfvm2");
    return this.http.post<Apiresultmodel>(this.URL+'horizon/createLinkedFloatingDesktopPool',vmquerymodel,httpOptions);

    }
  }
