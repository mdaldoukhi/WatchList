/* Styles */
import {
    ResultMovie,
    ListView,
    Wrapper,
    SearchMovie,
    SearchIcon,
    SearchValue,
    AddImageIcon,
} from "../styles";
/* Componenets */
import MovieItem from "./MovieItem";
/* Store */
import movieStore from "../stores/movieStore";
/* Libraries */
import { observer } from "mobx-react";
import { useState } from "react";

const MoviesList = () => {
    /* Function to import the watched movies */
    const watched = movieStore.movies.filter(
        (movie) => movie.status === "watched"
    );
    /* Function to import the unwached movies */
    const watchList = movieStore.movies.filter(
        (movie) => movie.status !== "watched"
    );
    /* Hold the new object and push it to the store [create new WatchList] */
    const [createMovie, setCreateMovie] = useState({ name: "", image: "" }); // will add new key and value that will hold the image url
    const handleChange = (event) => {
        setCreateMovie({ ...createMovie, [event.target.name]: event.target.value });
    };
    /* Function will handle the submit */
    const handleSubmit = (event) => {
        event.preventDefault();
        movieStore.newMovie(createMovie);
        event.target.name.value = "";
    };
    /* useState for filter */
    const [quary, setQuary] = useState("");
    const [quarySecond, setQuarySecond] = useState("");
    /* Display the watchList Table */
    const watchListTable = watchList
        .filter((movie) => movie.name.toLowerCase().includes(quary.toLowerCase()))
        .map((movie) => <MovieItem movie={movie} />);

    /* Display the watchTable Table */
    const watchTable = watched
        .filter((movie) =>
            movie.name.toLowerCase().includes(quarySecond.toLowerCase())
        )
        .map((movie) => <MovieItem movie={movie} />);
    /* Decleare the useState with False value */
    const [addImage, setAddImage] = useState(0);
    return (
        <div>
            {/* Add New WatchList */}
            <form className="input-group m-3" onSubmit={handleSubmit}>
                <div className="col-md-2 ">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Movie..."
                        name="name"
                        onChange={handleChange}
                    />
                </div>
                {/* if(addImage === true){div} else{false} {condition ? true : false}*/}
                {addImage ? (
                    <div className="col-md-2 ">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add image..."
                            name="image"
                            onChange={handleChange}
                        />
                    </div>
                ) : (
                    false
                )}

                <button type="submit" className="btn btn-outline-dark  ">
                    Add
                </button>
                <AddImageIcon onClick={() => setAddImage(!addImage)} />
            </form>
            {/* Wrap the items for watchlist and watched */}
            <Wrapper>
                {/* Start WatchList Section */}
                <ListView>
                    <h4>Watchlist</h4>
                    {watchListTable.length === watchList.length ? (
                        <span>{watchListTable.length}</span>
                    ) : (
                        <SearchValue>{`Showing ${watchListTable.length} out of ${watchList.length}`}</SearchValue>
                    )}
                    <ResultMovie>
                        <SearchMovie>
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={(event) => setQuary(event.target.value)}
                            />
                            <SearchIcon />
                        </SearchMovie>
                        <div className="p-3">
                            {watchListTable.length === 0 ? "Nothing Found." : watchListTable}
                        </div>
                    </ResultMovie>
                </ListView>
                {/* End WatchList Section */}

                {/* Start Watched Section */}
                <ListView>
                    <h4>Watched</h4>
                    {watchTable.length === watched.length ? (
                        <span>{watchTable.length}</span>
                    ) : (
                        <SearchValue>{`Showing ${watchTable.length} out of ${watched.length}`}</SearchValue>
                    )}
                    <ResultMovie>
                        <SearchMovie>
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={(event) => setQuarySecond(event.target.value)}
                            />
                            <SearchIcon />
                        </SearchMovie>
                        <div className="p-3">
                            {watchTable.length === 0 ? "Nothing Found." : watchTable}
                        </div>
                    </ResultMovie>
                </ListView>
                {/* End Watched Section */}
            </Wrapper>
        </div>
    );
};
export default observer(MoviesList);
