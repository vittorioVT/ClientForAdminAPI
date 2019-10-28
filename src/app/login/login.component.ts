import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    userName: '',
    password: ''
  }

  constructor(private service: AuthService) { }

  login() {
    console.log(this.loginData);
  }
    
}
