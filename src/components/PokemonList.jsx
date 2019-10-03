import React, { useState, useEffect } from "react";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(data => data.json())
      .then(pokemon =>
        pokemon.results.forEach((monster, index) =>
          setPokemons([...pokemons, <li key={index}>{monster.name}</li>])
        )
      );
  });

  return (
    <div>
      <p>This is your pokemon</p>
      <ul>{pokemons}</ul>
    </div>
  );
};

export default PokemonList;
