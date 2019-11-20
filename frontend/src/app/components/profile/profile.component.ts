import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.apiService.getProfile(id).subscribe(data => {
      this.profile = data;
    })
  }

}
