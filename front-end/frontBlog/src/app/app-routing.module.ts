import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PresentAccountComponent } from './components/account/present-account/present-account.component';
import { PresentPostComponent} from './components/post/present-post/present-post.component';
import { EditAccountComponent } from './components/account/edit-account/edit-account.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'account', component: PresentAccountComponent},
  {path: 'account/edit', component: EditAccountComponent},
  {path: 'post/:id', component: PresentPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
