import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./Styles.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then(response => response.json())
      .then(movies => setMovies(movies.results));
  });

  return (
    <>
      <div className="header">
        <h2>Rick & Morty</h2>
      </div>
      <section className="gallery">
        {movies.map((movie, mvId) => (
          <div key={mvId}>
            <img src={movie.image} alt="images of rick and morty" />
            <p className="imgName">{movie.name}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
