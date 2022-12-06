import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router, private http: HttpClient) { }



  isAuthenticated():boolean{
    if(sessionStorage.getItem('id')!==null) {
      return true;
    }
      return false;
  }

  // Register call
  register(uname: string, pword: string, cPword: string){
    return this.http
    .post<{id: string}>('Regsiter_API', {userName: uname, password: pword, confirmPassword: cPword});
  }


  //Login call
   login(uname: string, pword: string){
    return this.http
    .post<{id: string}>('Login_API',  {username: uname, password: pword})
   }


  canAuthenticate(){
    if(this.isAuthenticated()){
     this.router.navigate(['/upload'])
    }
  }

  canAccess(){
    if(!this.isAuthenticated()){
      this.router.navigate(['/login'])
    }
  }

  // store id as session storage
  storeId(id:string){
    sessionStorage.setItem('id', id);
  }

}
