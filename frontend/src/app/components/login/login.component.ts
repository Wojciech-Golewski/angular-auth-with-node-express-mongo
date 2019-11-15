import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: User = {
    email: "",
    password: ""
  };

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  post() {
    console.log(this.loginData);
    this.apiService.loginUser(this.loginData).subscribe();
  }
}
