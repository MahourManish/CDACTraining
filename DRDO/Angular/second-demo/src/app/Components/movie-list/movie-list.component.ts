import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Models/movie';
import { movies } from '../../Data/movie'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";
import { FilterMoviePipe } from '../../Pipes/filter-movie.pipe';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MovieDetailComponent, FilterMoviePipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  title: string = "Movie List"
  editId: number = 0
  movieList: Movie[] = [];
  tempMovie!: Movie;
  searchValue: string = "";
  ngOnInit(): void {
    this.movieList = [...movies];
  }



  updateMovie(el: Movie){
    let idx = this.movieList.findIndex(a => a.id == el.id);

    this.movieList[idx].director = el.director;
    this.movieList[idx].year = el.year;
    this.movieList[idx].genre = el.genre;

    console.log(this.movieList);
  }

  deleteMovie(id: number){
    let recordId = this.movieList.findIndex(a => a.id == id);
    this.movieList.splice(recordId,1);
  }
  




}
