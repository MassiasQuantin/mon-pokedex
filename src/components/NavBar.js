import React from 'react';

const NavBar = ({ pokemonList, onButtonClick }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => onButtonClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;