import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: string[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    })
  }
  
}
