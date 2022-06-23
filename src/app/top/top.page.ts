import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage {
  movies: any = [];

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ebc0a4ad59da5f80113ec7d1142c72a7')
      .subscribe(response => this.movies = response['results']);
  }
}
