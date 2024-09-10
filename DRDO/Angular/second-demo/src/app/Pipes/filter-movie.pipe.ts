import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../Models/movie';

@Pipe({
  name: 'filterMovie',
  standalone: true
})
export class FilterMoviePipe implements PipeTransform {

  transform(value: Movie[], arg: string): Movie[] {
    if(arg == "")
    {
      return value;
    }
    else{      
      return value.filter(a => a.title.toLowerCase().includes(arg.toLowerCase()) || a.director.toLowerCase().includes(arg.toLowerCase()) || a.genre.toLowerCase().includes(arg.toLowerCase()));
    }
  }

}
