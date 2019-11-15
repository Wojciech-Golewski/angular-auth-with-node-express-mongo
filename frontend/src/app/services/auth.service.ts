import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

const apiUrl: string = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(registeredData: User) {
    this.http.post<User>(`${apiUrl}register`, registeredData)
      .subscribe(res => {
        console.log(res);
      })
  }

  loginUser(loginData: User) {
    this.http.post<User>(`${apiUrl}login`, loginData)
    .subscribe(res => {
      console.log(res);
      localStorage.setItem('token', JSON.parse(JSON.stringify(res)).token);
    })
  }
}
