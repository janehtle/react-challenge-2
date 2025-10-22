import { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const API_KEY = import.meta.env.API_TOKEN;
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";

function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function search(e) {
        e?.preventDefault();
        
        if (!query.trim()) 
            return;

        setLoading(true);
        setError("");

        try {
            const response = await fetch(`${SEARCH_URL}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
            const data = await response.json();

            if (!response.ok) throw new Error(data.status_message || "Failed to search.");
            setResults(data.results || []);
        } catch (err) {
            console.error(err);
            setError(err.message);
            setResults([]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <h1>Search Movies</h1>
            <form onSubmit={search}>
                <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Enter movie name." />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div>
                {results.map(movie => {
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <MovieCard movie={movie} />
                    </Link>
                })}
            </div>
        </>
    )
}

export default SearchPage