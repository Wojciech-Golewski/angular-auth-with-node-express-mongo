import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MessagesComponent } from './components/messages/messages.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { RegisterComponent } from './components/register/register.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


const routes = [
  {
    path: 'register',
    component: RegisterComponent
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
    RegisterComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
