import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  loggedIn = false;

  login(uname: string, pword: string):Boolean | Number{
     if(uname === 'Mirafra' && pword === 'Mirafra@123'){
      this.loggedIn = true;
      return 200;
     } else {
      return 403;
     }
  }

  canAccess(){
    if(!this.loggedIn){
      this.router.navigate(['login'])
    }
  }
}
