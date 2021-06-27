import movieStore from "../stores/movieStore";
import { observer } from 'mobx-react'
import { ItemWrapper, ActionTools } from "../styles";

const MovieItem = (props) => {
    const handleClick = () => {
        movieStore.updateStatus(props.movie)
    }
    const deleteClick = () => {
        movieStore.deleteMovies(props.movie.id)
    }
    
    return (
        <ItemWrapper>
            <p>{props.movie.name}</p>
            <ActionTools>
                <button onClick={handleClick} type="button" className="btn btn-outline-success">{props.movie.status}</button>
                <button onClick={deleteClick} type="button" className="btn btn-outline-danger">Delete</button>
            </ActionTools>
        </ItemWrapper>
    )
}
export default observer(MovieItem);