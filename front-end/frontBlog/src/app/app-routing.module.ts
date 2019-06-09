import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PresentAccountComponent } from './components/account/present-account/present-account.component';
import { PresentPostComponent} from './components/post/present-post/present-post.component';
import { EditAccountComponent } from './components/account/edit-account/edit-account.component';
import { AdminPostsComponent } from './components/admin/admin-posts/admin-posts.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { CreatePostComponent } from './components/post/create-post/create-post.component';
import { EditPostComponent } from './components/post/edit-post/edit-post.component';
import { AllUserPostComponent } from './components/post/all-user-post/all-user-post.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'account', component: PresentAccountComponent},
  {path: 'account/edit', component: EditAccountComponent},
  {path: 'post/create', component: CreatePostComponent},
  {path: 'post/:id', component: PresentPostComponent},
  {path: 'post/:id/edit', component: EditPostComponent},
  {path: 'userallpost', component: AllUserPostComponent},
  {path: 'admin/posts', component: AdminPostsComponent},
  {path: 'admin/users', component: AdminUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
