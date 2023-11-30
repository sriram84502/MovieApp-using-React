import { useParams } from "react-router-dom";
import Movies from "../assets/data";
function MoviePage() {
    const { id } = useParams();
    const movie = Movies.filter(Movie => Movie.id == id);
    return(
        <>
        <div className="card-container">
            <div className="card-poster">
                <img src={`https://source.unsplash.com/400x400/?${movie[0].title}`} alt={movie[0].title} />
            </div>
            <div className="card-details">
                <h2 className="card-title">{movie[0].title} ({movie[0].year})</h2>
                <p className="card-genre">{movie[0].genre}</p>
                <p className="card-synopsis">{movie[0].description}</p>
                <p className="card-director"><strong>Directed by:</strong> {movie[0].director}</p>
                <p className="card-cast"><strong>Cast:</strong> {movie[0].cast}</p>
            </div>
        </div>
        </>
    )
}

export default MoviePage;