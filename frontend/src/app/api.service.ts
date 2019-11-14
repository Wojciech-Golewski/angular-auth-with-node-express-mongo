import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl: string = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMessages() {
    this.http.get(`${apiUrl}posts`).subscribe(response => {
      console.log(response);
    });
  }
}
