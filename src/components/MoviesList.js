import { ResultMovie, ListView, Wrapper, SearchMovie } from "../styles";
import MovieItem from "./MovieItem";
import movieStore from "../stores/movieStore"
import { observer } from 'mobx-react'
import { useState } from "react";



const MoviesList = () => {
    /* Function to import the watched movies */
    const watched = movieStore.movies.filter(movie => movie.status === "watched")
    /* Function to import the unwached movies */
    const watchList = movieStore.movies.filter(movie => movie.status !== "watched")
    /* Function will handle the submit */
    const [createMovie, setCreateMovie]= useState({name:""})
    const handleChange = (event) => {
        setCreateMovie({...createMovie, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        movieStore.newMovie(createMovie)
        event.target.name.value = ""

    }    
    return (
        <div>
            <form className="input-group m-3" onSubmit={handleSubmit}>
                <div className="col-md-4 ">
                    <input type="text" className="form-control" placeholder="Movie..." name="name" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-outline-dark col-1 ">Add</button>

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