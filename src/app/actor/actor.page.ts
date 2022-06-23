import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.page.html',
  styleUrls: ['./actor.page.scss'],
})
export class ActorPage {
  actor: any;
  movies: any;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    let state = this.router.getCurrentNavigation().extras.state;

    this.http.get('https://api.themoviedb.org/3/person/'+state.id+'?api_key=ebc0a4ad59da5f80113ec7d1142c72a7')
      .subscribe(response => {
        this.actor = response;
        this.http.get('https://api.themoviedb.org/3/person/' + this.actor.id + '/movie_credits?api_key=ebc0a4ad59da5f80113ec7d1142c72a7').subscribe(
          response => this.movies = response['cast']
        );
      });
  }
}
