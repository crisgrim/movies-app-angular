import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies-response';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  @Input()
  movies: Movie[] = [];
}
