import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ComentsComponent } from './coments/coments.component';
import { PostsComponent } from './posts/posts.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'coments', component: ComentsComponent},
  {path: 'posts', component: PostsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ComentsComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
