import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {  TruncatePipe }   from './app.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './service/user/user.service';
import { CreatePostComponent } from './components/post/create-post/create-post.component';
import { PresentPostComponent } from './components/post/present-post/present-post.component';
import { PresentAccountComponent } from './components/account/present-account/present-account.component';
import { EditAccountComponent } from './components/account/edit-account/edit-account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    TruncatePipe,
    CreatePostComponent,
    PresentPostComponent,
    PresentAccountComponent,
    EditAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ],
  providers: [UserService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
