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
  register(username: string, password: string, confirm_password: string){
    console.log('Calling Register')
    return this.http
    .post<{id:string}>('http://127.0.0.1:5000/register', {username: username, password: password, confirm_password: confirm_password});
  }


  //Login call
   login(username: string, password: string){
    console.log('Calling Login')
    return this.http
    .post<{id:string}>('http://127.0.0.1:5000/login',  {username: username, password: password})
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
