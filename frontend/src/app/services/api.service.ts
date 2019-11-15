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

  sendUserRegistration(registeredData: User): Observable<User> {
    return this.http.post<User>(`${apiUrl}register`, registeredData);
  }

}
