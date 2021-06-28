/* Store */
import movieStore from "../stores/movieStore";
/* Library */
import { observer } from "mobx-react";
/* Styles */
import { ItemWrapper, ActionTools } from "../styles";

const MovieItem = (props) => {
    /* will change the watched to unwatch */
    const handleClick = () => {
        movieStore.updateStatus(props.movie);
    };
    /* will delete the movie from list */
    const deleteClick = () => {
        movieStore.deleteMovies(props.movie.id);
    };
    return (
        /* Wrap the Item */
        <ItemWrapper>
            <p>{props.movie.name}</p>
            {/* Buttons section */}
            <ActionTools>
                <button
                    onClick={handleClick}
                    type="button"
                    className="btn btn-outline-success"
                >
                    {(props.movie.status === "watched") ? "Unwatched" : "Watched"}
                </button>
                <button
                    onClick={deleteClick}
                    type="button"
                    className="btn btn-outline-danger"
                >
                    Delete
                </button>
            </ActionTools>
        </ItemWrapper>
    );
};
export default observer(MovieItem);
