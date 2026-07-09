export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />

      <div className="movie-overlay">
        <h3>{movie.title}</h3>

        <p>{movie.genre}</p>

        <span>⭐ {movie.rating}</span>

        <button>▶ Watch</button>
      </div>
    </div>
  );
}