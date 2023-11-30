import { Link } from "react-router-dom";

function ListMovies(props) {
    return (
        <>
        <Link to={`/movie/${props.id}`}>
            <div className="movie-card">
                <div className="movie-image">
                    <img src={"https://source.unsplash.com/400x400/?"+props.title} alt={props.title}/>
                </div>
                <div className="movie-header">
                    {props.title + "(" + props.year + ")"}
                </div>
                <div className="movie-content">
                    {props.desc}
                </div>
            </div>
        </Link>
        </>
    )
}

export default ListMovies;