import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   formData = {name:'', password:'', confirmPassword: ''}
   submit = false;
   errorMessage = '';


  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.auth.register(this.formData.name, this.formData.password, this.formData.confirmPassword)
    .subscribe({
      next: data => {
        this.auth.storeId(data.id)
        console.log('Regsitered UserId: '+ data.id);
        this.auth.canAuthenticate()
      },
      error: data => {
        if(data.message = 'USER_EXISTS'){
           this.errorMessage = 'Already User exists!';
        } else {
          this.errorMessage = 'Unknown error occured when creating this account!';
        }
      }
    }).add(() => {
      console.log('Regsiteration Completed')
    })
  }

}
