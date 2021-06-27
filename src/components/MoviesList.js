import { ResultMovie, ListView, Wrapper, SearchMovie, SearchIcon } from "../styles";
import MovieItem from "./MovieItem";
import movieStore from "../stores/movieStore"
import { observer } from 'mobx-react'
import { useState } from "react";



const MoviesList = () => {
    /* Function to import the watched movies */
    const watched = movieStore.movies.filter(movie => movie.status === "watched")
    /* Function to import the unwached movies */
    const watchList = movieStore.movies.filter(movie => movie.status !== "watched")

    const [createMovie, setCreateMovie] = useState({ name: "" })
    const handleChange = (event) => {
        setCreateMovie({ ...createMovie, [event.target.name]: event.target.value })
    }
    /* Function will handle the submit */
    const handleSubmit = (event) => {
        event.preventDefault();
        movieStore.newMovie(createMovie)
        event.target.name.value = ""
    }
    /* useState for filter */
    const [quary, setQuary] = useState("")
    const [quarySecond, setQuarySecond] = useState("")
    /* Display the watchList Table */
    const watchListTable = watchList
                        .filter(movie => movie.name.toLowerCase().includes(quary.toLowerCase()))
                        .map(movie => <MovieItem movie={movie} />)
    
    const watchTable = watched
                        .filter(movie => movie.name.toLowerCase().includes(quarySecond.toLowerCase()))
                        .map(movie => <MovieItem movie={movie} />)
    return (
        <div>
            <form className="input-group m-3" onSubmit={handleSubmit}>
                <div className="col-md-2 ">
                    <input type="text" className="form-control" placeholder="Movie..." name="name" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-outline-dark  ">Add</button>
            </form>
            <Wrapper>
                <ListView>
                    <h4>Watchlist</h4>
                    <span>{watchListTable.length}</span>
                    <ResultMovie>
                        <SearchMovie>
                            <input type="search" placeholder="Search..." onChange={event => setQuary(event.target.value)} />
                            <SearchIcon />
                        </SearchMovie>
                        <div className='p-3'>
                            {(watchListTable.length === 0) ? "Nothing Found." : watchListTable}
                        </div>
                    </ResultMovie>
                </ListView>
                <ListView>
                    <h4>Watched</h4>
                    <span>{watchTable.length}</span>
                    <ResultMovie>
                        <SearchMovie>
                            <input type="search" placeholder="Search..." onChange={event => setQuarySecond(event.target.value)} />
                            <SearchIcon />
                        </SearchMovie>
                        <div className='p-3'>
                            {(watchTable.length === 0) ? "Nothing Found." : watchTable}
                        </div>
                    </ResultMovie>
                </ListView>
            </Wrapper>
        </div>
    )
}
export default observer(MoviesList);