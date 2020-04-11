import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {

  // @ts-ignore
  coments: ComentModel[];
  constructor(private http: HttpClient) {
    // @ts-ignore
    this.http.get<ComentModel[]>('https://jsonplaceholder.typicode.com/comments').subscribe(value => this.coments = value)
  }

  ngOnInit(): void {
  }

}
