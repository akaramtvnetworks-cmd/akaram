import { useParams } from "react-router-dom";
import movies from "../data/movies";

function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <h1>Movie Not Found</h1>;
  }

  return (
    <div
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1 style={{ color: "gold" }}>{movie.title}</h1>

      <h3>
        ⭐ {movie.rating} | {movie.category} | {movie.language}
      </h3>

      <img
        src={movie.poster}
        alt={movie.title}
        style={{
          width: "300px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      />

      <p
        style={{
          maxWidth: "700px",
          marginTop: "30px",
          lineHeight: "1.8",
        }}
      >
        {movie.description}
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "15px 30px",
          background: "gold",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        ▶ Watch Now
      </button>
    </div>
  );
}

export default MovieDetails;