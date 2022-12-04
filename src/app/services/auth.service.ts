import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router, private http: HttpClient) { }

  loggedIn = false;

  //Authentication
  login(uname: string, pword: string):Boolean | Number{
     if(uname === 'Mirafra' && pword === 'Mirafra@123'){
      this.loggedIn = true;
      return 200;
     } else {
      return 403;
     }
  }


  //send data to server
  register(uname: string, pword: string){
    return this.http
    .post('API_endpoint', {userName: uname, password: pword});
  }


  canAccess(){
    if(!this.loggedIn){
      this.router.navigate(['login'])
    }
  }
}
