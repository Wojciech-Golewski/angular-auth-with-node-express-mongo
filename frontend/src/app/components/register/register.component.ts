import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData: User = {
    email: "",
    password: ""
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  post() {
    this.authService.registerUser(this.registerData);
  }

}
