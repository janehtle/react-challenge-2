function MovieCard({ movie }) {
    const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : 'https://via.placeholder.com/342x513?text=No+Image';

    return (
        <div>
            <img src={poster} alt={movie.title} />
            <h4 style={{ marginTop: 8 }}>{movie.title}</h4>
            <small>{movie.release_date?.slice(0,4)}</small>
        </div>
    );
}

export default MovieCard
