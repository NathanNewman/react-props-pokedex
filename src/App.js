import React from 'react';
import PokeCard from './PokeCard';
import PokeDex from './PokeDex';
import './App.css';

function App() {
  return (
    <div className="App">
      <PokeCard pokeData={PokeDex} />
    </div>
  );
}

export default App;
