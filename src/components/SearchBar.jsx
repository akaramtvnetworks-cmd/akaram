import { useState } from "react";
import movies from "../data/movies";

function SearchBar() {
  const [query, setQuery] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "5px",
          border: "1px solid #555",
        }}
      />

      {query && (
        <div
          style={{
            position: "absolute",
            top: "45px",
            left: 0,
            width: "250px",
            background: "#222",
            borderRadius: "5px",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div
                key={movie.id}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #444",
                  color: "white",
                }}
              >
                {movie.title}
              </div>
            ))
          ) : (
            <div style={{ padding: "10px", color: "white" }}>
              No movies found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;