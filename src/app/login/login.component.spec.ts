import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component'
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

class MockLoginService {
  formData = {
    userName: "Richard",
    password: "Richard@123"
  }
}



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let http: HttpClient;
  let httpController: HttpTestingController;
  let submitEl: DebugElement
  let userNameEl: DebugElement
  let passwordEl: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ LoginComponent, NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);

    userNameEl = fixture.debugElement.query(By.css('input[type=string]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
    submitEl = fixture.debugElement.query(By.css('.btn btn-login'))

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('login created', () => {
    expect(component).toBeTruthy();
  });
});
