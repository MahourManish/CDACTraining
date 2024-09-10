import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../Models/movie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, MovieDetailComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  @Input() movie = {} as Movie;
  @Output() updateMovie = new EventEmitter<Movie>();
  @Output() deleteMovie = new EventEmitter<number>();

  tempMovie = {} as Movie;
  editM: boolean = false;


  closeAction(){
    this.editM = false;
  }
  saveData(){
    this.movie = {...this.tempMovie}
    this.updateMovie.emit(this.movie);
    this.closeAction()
  }

  deleteRecord(){
    this.deleteMovie.emit(this.movie.id);
    this.closeAction()
  }

  editMode(){
    this.tempMovie = {...this.movie}
    this.editM = true;
  }

}
