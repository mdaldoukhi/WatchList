import movies from '../movies'
import { makeAutoObservable } from 'mobx';

class MovieStore {
    movies = movies;
    constructor() {
        makeAutoObservable(this)
    }
    updateStatus = (updateStatus) => {
        const movie = this.movies.find((movie) => movie.id === updateStatus.id)
        if(movie.status === "watched") movie.status = "watchlist"
        else movie.status = "watched"
    }
    deleteMovies = (moviesId) => {
        
    }
}
const movieStore = new MovieStore() // create instance
export default movieStore; // export it 