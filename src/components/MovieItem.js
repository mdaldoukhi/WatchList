/* Store */
import movieStore from "../stores/movieStore";
/* Library */
import { observer } from "mobx-react";
/* Styles */
import { ItemWrapper, ActionTools } from "../styles";
// usestate
import { useState } from "react";

const MovieItem = (props) => {
  /* will change the watched to unwatch */
  const handleClick = () => {
    movieStore.updateStatus(props.movie);
  };
  /* will delete the movie from list */
  const deleteClick = () => {
    movieStore.deleteMovies(props.movie.id);
  };

  //usestate add image button
  const [isHide, setIshide] = useState(0);

  return (
    /* Wrap the Item */
    <ItemWrapper>
      {isHide ? <img src={props.movie.image} /> : false}
      <p onClick={() => setIshide(!isHide)}>{props.movie.name}</p>
      {/* Buttons section */}
      <ActionTools>
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-outline-success"
        >
          {props.movie.status === "watched" ? "Unwatched" : "Watched"}
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
