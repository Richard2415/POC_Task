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
    userName : '',
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
    this.auth.login(this.formData.userName, this.formData.password)
    .subscribe({
      next: data => {
        //store token from response data
        this.auth.storeId(data.id);
        console.log('Login UserId '+ data.id)
        this.auth.canAuthenticate();
      }
    })
  }

}
