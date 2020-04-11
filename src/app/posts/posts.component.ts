import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // @ts-ignore
  posts: PostModel[];
  constructor(private http: HttpClient) {
    // @ts-ignore
    this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts').subscribe(value => this.posts = value);
  }

  ngOnInit(): void {
  }

}
