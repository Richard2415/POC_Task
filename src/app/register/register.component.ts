import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   formData = {
    username : "",
    password : "",
    confirm_password : ""
   };

   submit = false;
   errorMessage = '';


  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

  onSubmit(){

    // console.log(this.formData);
    this.auth.register(this.formData.username, this.formData.password, this.formData.confirm_password)
    .subscribe(
      (data) => {
        this.auth.storeId(data.id);
        this.auth.canAuthenticate();
      },
     (error) => {
      console.log(error)
      if(error.message = 'This username already exist try another'){
        this.errorMessage = 'Already User exists';
      } else {
        this.errorMessage = 'Unknown error occured when creating this account!';
      }
     }
    ).add(() => {
      console.log('Regsiteration Completed')
    })
  }
}
