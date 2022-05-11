import { MoviesResponse } from './../models/movies-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = 'aa408cb43bb7cd2c815b6935531a4e33';
  private language = 'en-US';

  constructor(private httpClient: HttpClient) {}

  getPopularMovies(): Observable<MoviesResponse> {
    return this.httpClient.get<MoviesResponse>(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=${this.language}&page=1`);
  }

  getUpcomingMovies(): Observable<MoviesResponse> {
    return this.httpClient.get<MoviesResponse>(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=${this.language}&page=1`)
  }

  getMoviesByTitleAndYear(title: string, year: string): Observable<MoviesResponse> {
    return this.httpClient.get<MoviesResponse>(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=${this.language}&page=1&include_adult=false&query=${title}&primary_release_year=${year}`);
  }

  getMovieById(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=${this.language}&page=1`);
  }
}
