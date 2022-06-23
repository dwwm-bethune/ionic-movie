import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  movie: any;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    let movie = this.router.getCurrentNavigation().extras.state;

    this.http.get('https://api.themoviedb.org/3/movie/'+movie.id+'?api_key=ebc0a4ad59da5f80113ec7d1142c72a7&append_to_response=credits')
      .subscribe(response => this.movie = response);
  }
}
