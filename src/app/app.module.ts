import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';


const routes:Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'upload', component:UploadComponent},
  {path: '', redirectTo:'register', pathMatch:'full'},
  {path: '**', redirectTo:'register'}
]

const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
