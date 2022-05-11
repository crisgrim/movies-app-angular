import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movies-response';
import { Search } from 'src/app/models/search';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  showingPopular = false;
  showingUpcoming = false;
  title: string = 'Popular movies';

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.title = 'Popular movies';
    this.showingPopular = true;
    this.showingUpcoming = false;
    this.moviesService.getPopularMovies().subscribe(
      (response) => {
        this.movies = response.results;
      },
      (error) => {
        console.log(error);
      });
  }

  getUpcomingMovies(): void {
    this.title = 'Upcoming movies';
    this.showingPopular = false;
    this.showingUpcoming = true;
    this.moviesService.getUpcomingMovies().subscribe(
      (response) => {
        this.movies = response.results;
      },
      (error) => {
        console.log(error);
      });
  }

  showPopular(): void {
    this.getPopularMovies();
  }

  showUpcoming(): void {
    this.getUpcomingMovies();
  }

  handleSearch(search: Search): void {
    this.title = 'Search movies by title';
    this.moviesService.getMoviesByTitleAndYear(search.title, search.year).subscribe(
      (response) => {
        this.movies = response.results;
      },
      (error) => {
        console.log(error);
      });
  }
}
