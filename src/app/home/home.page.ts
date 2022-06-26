import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  movies: any = [];
  showSearch: boolean = false;
  search: string = '';

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=ebc0a4ad59da5f80113ec7d1142c72a7')
      .subscribe(response => this.movies = response['results']);
  }

  onSearch() {
    if (this.search) {
      this.http.get('https://api.themoviedb.org/3/search/movie?api_key=ebc0a4ad59da5f80113ec7d1142c72a7&query='+this.search)
        .subscribe(response => this.movies = response['results']);
    } else {
      this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=ebc0a4ad59da5f80113ec7d1142c72a7')
        .subscribe(response => this.movies = response['results']);
    }
  }
}
