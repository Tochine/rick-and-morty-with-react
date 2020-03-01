import React, { useState, useEffect } from "react";
import "../styles/Styles.css";
import { Link } from "react-router-dom";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then(response => response.json())
      .then(characters => setCharacters(characters.results));
  });

  return (
    <>
      <section className="gallery">
        {characters.map((character, characterId) => (
          <div key={characterId}>
            <img src={character.image} alt="images of rick and morty" />
            <Link to={`/character/${character.id}`} state={character}>
              <p className="imgName">{character.name}</p>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}

export default Characters;
