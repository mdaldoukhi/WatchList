import movieStore from "../stores/movieStore";
import { observer } from 'mobx-react'

const MovieItem = (props) => {
    const handleClick = () => {
        movieStore.updateStatus(props.movie)
    }
    const deleteClick = () => {
        movieStore.deleteMovies(props.movie.id)
    }

    return (
        <div>
            <p>{props.movie.name}</p>
            <button onClick={handleClick}>{props.movie.status}</button>
            <button onClick={deleteClick}>Delete</button>
        </div>
    )
}
export default observer(MovieItem);