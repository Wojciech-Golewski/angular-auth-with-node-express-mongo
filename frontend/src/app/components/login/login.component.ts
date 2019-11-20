import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: User = {
    email: '',
    password: '',
    name: '',
    description: ''
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  post() {
    this.authService.loginUser(this.loginData);
  }
}
