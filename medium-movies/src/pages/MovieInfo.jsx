import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.API_TOKEN;
const INFO_URL = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

function MovieInfo() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchInfo() {
            try {
                const res = await fetch(INFO_URL(id));
                const data = await res.json();

                if (!res.ok) throw new Error(data.status_message || "Unable to load.");
                setMovie(data); 
            } catch (err) {
                console.error(err);
                setError(err.message);
            }
        }
        fetchInfo();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!movie) return <p>Loading...</p>;

    const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'; 

    return (
        <>
            <Link to="/">Back</Link>
            <h1>{movie.title} {movie.release_date?.slice(0, 4)}</h1>
            <img src={poster} alt={movie.title} />
            <p>Overview: {movie.overview}</p>
        </>
    )
}

export default MovieInfo