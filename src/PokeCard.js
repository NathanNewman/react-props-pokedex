import React from "react";
import "./PokeCard.css";

const PokeCard = ({ pokeData }) => {
  console.log(pokeData);
  return (
    <div className="poke-dex">
      {pokeData.map((pokemon) => (
        <div className="poke-card" key={pokemon.id}>
          <h3>{pokemon.name}</h3>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt=""
          />
          <p>Type: {pokemon.type}</p>
          <p>Exp: {pokemon.base_experience}</p>
        </div>
      ))}
    </div>
  );
};

export default PokeCard;
