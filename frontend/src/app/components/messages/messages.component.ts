import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    let userId = this.activatedRoute.snapshot.params.id;

    this.apiService.getMessages(userId).subscribe(data => {
      this.messages = data;
    })
  }

}
