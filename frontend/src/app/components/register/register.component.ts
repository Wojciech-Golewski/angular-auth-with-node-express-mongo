import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user.model';

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
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  post() {
    console.log(this.registerData);
    this.apiService.sendUserRegistration(this.registerData).subscribe();
  }

}
