import movies from "../movies";
import MovieItem from "./MovieItem";
const MoviesList = () => {
    /* Function to import the watched movies */
    const watched = movies.filter(movie => movie.status === "watched")
    /* Function to import the unwached movies */
    const watchList = movies.filter(movie => movie.status !== "watched")
    return (
        <div>
            <input type='text'/>
            <div>
                <h1>Watchlist</h1>
                {watchList.map(movie => <MovieItem movie={movie} />)}
            </div>
            <div>
                <h1>Watched</h1>
                {watched.map(movie => <MovieItem movie={movie} />)}

            </div>
        </div>
    )
}
export default MoviesList;