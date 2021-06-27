import movies from '../movies'
import { makeAutoObservable } from 'mobx';

class MovieStore {
    movies = movies;
    constructor() {
        makeAutoObservable(this)
    }
    /* Function to change the status of button */
    updateStatus = (updateStatus) => {
        const movie = this.movies.find((movie) => movie.id === updateStatus.id)
        if(movie.status === "watched") movie.status = "watchlist"
        else movie.status = "watched"
    }
    /* Function to delete the movie from list */
    deleteMovies = (deleteMovies) => {
        const deleteMovie = this.movies.filter(movie => movie.id !== deleteMovies)
        this.movies = deleteMovie
    }
    /* Funtion to add new movielist */
    newMovie = (newMovie) => {
        newMovie.id = this.movies.length + 1;
        newMovie.status = "watchlist"
        this.movies.push(newMovie)
    }

}
const movieStore = new MovieStore() // create instance
export default movieStore; // export it 