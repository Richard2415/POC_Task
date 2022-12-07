import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegisterComponent } from './register.component';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component'
import { FormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ RegisterComponent, NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
