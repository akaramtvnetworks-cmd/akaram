import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#000",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2 style={{ color: "#f7c52b" }}>AKARAM</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/movies" style={{ color: "white", textDecoration: "none" }}>
          Movies
        </Link>

        <Link to="/news" style={{ color: "white", textDecoration: "none" }}>
          News
        </Link>

        <Link to="/sports" style={{ color: "white", textDecoration: "none" }}>
          Sports
        </Link>
      </div>
    </nav>
  );
}