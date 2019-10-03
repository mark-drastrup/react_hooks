import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}

export default App;
