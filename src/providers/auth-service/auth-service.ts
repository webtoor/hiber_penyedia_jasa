import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

//let apiUrl = "http://localhost/hiber/api/";
let apiUrl = "http://localhost/hiber/api/penyedia.php/";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }
  postData(credentials, type){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post(apiUrl+type, JSON.stringify(credentials), {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }

}
