import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  postMessage: Post = {
    message: ''
  };

  constructor(
    private apiService: ApiService
  ) { }

  post() {
    this.apiService.postMessage(this.postMessage);
  }

}
