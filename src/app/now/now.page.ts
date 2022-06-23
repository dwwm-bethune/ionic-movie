import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-now',
  templateUrl: './now.page.html',
  styleUrls: ['./now.page.scss'],
})
export class NowPage {
  movies: any = [];

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ebc0a4ad59da5f80113ec7d1142c72a7')
      .subscribe(response => this.movies = response['results']);
  }
}
