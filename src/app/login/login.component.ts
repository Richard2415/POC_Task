import { Component, enableProdMode, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData = {
    username : '',
    password : ''
  };

  submit = false;
  errorMessage = '';

  constructor(private auth:AuthService, private router: Router) { }


  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

  onSubmit(){

    //call login API Service
    this.auth.login(this.formData.username, this.formData.password)
    .subscribe(
      (data) => {
         this.auth.storeId(data.id);
         this.auth.canAuthenticate();
      },
      (error) => {
         console.log(error);
         if(error.message == 'Invalid username or password'){
          this.errorMessage = 'Invalid username or password';
         } else {
          this.errorMessage = 'Unknown error occured!';
         }
      }
    ).add(() => {
      console.log('Login Successful')
    })
  }

}
