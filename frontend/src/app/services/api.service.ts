import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const apiUrl: string = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMessages(): Observable<string[]> {
    return this.http.get<string[]>(`${apiUrl}posts`);
  }

  postMessage(message: string) {
    this.http.post<string>(`${apiUrl}post`, message);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}users`);
  }

  getProfile(id: number): Observable<User> {
    return this.http.get<User>(`${apiUrl}profile/${id}`);
  }

}
