import Hero from "../components/Hero";
import ContentRow from "../components/ContentRow";
import movies from "../data/movies";

export default function Home() {
  return (
    <>
      {/* Hero Banner */}
      <Hero />

      {/* Movie Sections */}

      <ContentRow
        title="🔥 Trending Movies"
        movies={movies}
      />

      <ContentRow
        title="🆕 New Releases"
        movies={movies}
      />

      <ContentRow
        title="⭐ Editor's Picks"
        movies={movies}
      />

      <ContentRow
        title="🎬 Tamil Classics"
        movies={movies}
      />

      <ContentRow
        title="🎵 Music & Concerts"
        movies={movies}
      />

      <ContentRow
        title="📺 AKARAM Originals"
        movies={movies}
      />

      <ContentRow
        title="👨‍🎨 Creator Hub"
        movies={movies}
      />
    </>
  );
}