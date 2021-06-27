import { ResultMovie, ListView, Wrapper, SearchMovie } from "../styles";
import MovieItem from "./MovieItem";
import movieStore from "../stores/movieStore"
import { observer } from 'mobx-react'



const MoviesList = () => {
    /* Function to import the watched movies */
    const watched = movieStore.movies.filter(movie => movie.status === "watched")
    /* Function to import the unwached movies */
    const watchList = movieStore.movies.filter(movie => movie.status !== "watched")
    /* Function will handle the submit */
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    return (
        <div>
            <form className="input-group m-3" onSubmit={handleSubmit}>
                <div class="col-md-4 ">
                    <input type="text" class="form-control" placeholder="Movie..." />
                </div>
                <button type="submit" class="btn btn-outline-dark col-1 m">Add</button>

            </form>
            <Wrapper>
                <ListView>
                    <h4>Watchlist</h4>
                    <ResultMovie>
                        <SearchMovie>
                            <input type="search"/>
                        </SearchMovie>
                        {watchList.map(movie => <MovieItem movie={movie}/>)}
                    </ResultMovie>
                </ListView>
                <ListView>
                    <h4>Watched</h4>
                    {watched.map(movie => <MovieItem movie={movie} />)}

                </ListView>
            </Wrapper>
        </div>
    )
}
export default observer(MoviesList);