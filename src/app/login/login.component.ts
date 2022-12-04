import { Component, OnInit } from '@angular/core';
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
  }

  onSubmit(){
    let response = this.auth.login(this.formData.userName, this.formData.password)
    if(response === 200){
      this.router.navigate(['upload'])
    }
    else if(response === 403){
      this.errorMessage += 'Invalid Credentials';
    }
  }

}
