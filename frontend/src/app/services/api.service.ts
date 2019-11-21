import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Post } from '../models/post';

const apiUrl: string = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMessages(userId: number): Observable<string[]> {
    return this.http.get<string[]>(`${apiUrl}posts/${userId}`);
  }

  postMessage(message: Post) {
    this.http.post<Post>(`${apiUrl}post`, message)
    .subscribe(res => {
      console.log(res);
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}users`);
  }

  getProfile(id: number): Observable<User> {
    return this.http.get<User>(`${apiUrl}profile/${id}`);
  }

}
