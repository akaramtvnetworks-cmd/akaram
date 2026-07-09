import MovieCard from "./MovieCard";

export default function ContentRow({ title, movies }) {
  return (
    <section className="content-row">
      <h2>{title}</h2>

      <div className="movie-slider">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
}