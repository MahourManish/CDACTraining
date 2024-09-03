class Movie{
    constructor(id,title,director){
        this.id = id;
        this.title = title;
        this.director = director;
    }
}

class MovieDatabase{
    movies = [
        {id: 1, title: "Harry Potter", director: "Chris Columbus"},
        {id: 2, title: "The Dark Knight", director: "Christopher Nolan"},
        {id: 3, title: "3 Idiots", director: "Rajkumar Hirani"},
        {id: 4, title: "12 Angry Man", director: "Sidney Lumet"},
    ];
    //addMovie = (movie) => this.movies.push(movie);
    addMovie = (movie) => this.movies = [...this.movies, movie];
    
    getAll = () => this.movies;
    
    getById = (id) => this.movies.find(m => m.id == id);
    
    modifyMovie = (id, movie) => {
        let index = this.movies.findIndex(m => m.id == id);
        if(index < 0){
            alert("Movie not found to modify");
        }else{
            if(movie == undefined){
                this.movies.splice(index,1);
            }else{
                this.movies.splice(index,1,movie);
            }
        }

    }

    getMaxId = () => {
        let val = 0;
        this.movies.forEach(a => {
            val = val<a.id?a.id:val;
        });
        return val;
    }

}