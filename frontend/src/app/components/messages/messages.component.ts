import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: string[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getMessages().subscribe(data => {
      this.messages = data;
    })
  }

}
