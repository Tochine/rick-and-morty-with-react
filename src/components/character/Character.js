import React, { useState, useEffect } from "react";
import "../styles/Styles.css";

const Character = props => {
  const [character, setCharacter] = useState(props.location.state);

  useEffect(() => {
    //desructuring
    const { characterId } = props;

    fetch("https://rickandmortyapi.com/api/character/" + postId)
      .then(response => response.json())
      .then(character => setCharacter(character));
  });

  return (
    <section>
      <div>
        <img src={character.image} alt="images of rick and morty" />
        <label>{character.name}</label>
        <label>{character.status}</label>
        <label>{character.species}</label>
      </div>
    </section>
  );
};

export default Character;
