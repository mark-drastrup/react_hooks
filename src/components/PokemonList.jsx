import React, { useState, useEffect } from "react";
import usePokemonImage from "../hooks/usePokemonImage";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(data => data.json())
      .then(pokemon => setPokemons([...pokemon.results]));
  });

  return (
    <div>
      <p>This is your pokemon</p>
      <ul>
        {pokemons &&
          pokemons.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
      </ul>
    </div>
  );
};

export default PokemonList;
