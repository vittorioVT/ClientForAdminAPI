import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:24347/auth/';
  
  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post(this.baseUrl + 'register', user);
  }

  login(user) {
    return this.http.post(this.baseUrl + 'login', user);
  }

  get getUserName() {
    return localStorage.getItem('userName');
  }

  get isAuthenticated() {
    return !!localStorage.getItem('token_value');
  }



}
