import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // @ts-ignore
  users: UserModel[];
  constructor(private http: HttpClient) {
    // @ts-ignore
    this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users').subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

}
