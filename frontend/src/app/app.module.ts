import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MessagesComponent } from './components/messages/messages.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { RegisterComponent } from './components/register/register.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { PostComponent } from './components/post/post.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';


const routes = [
  {
    path: '',
    component: PostComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UsersListComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
