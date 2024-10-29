import React from 'react';

interface PokemonRowProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const PokemonRow: React.FC<PokemonRowProps> = ({ id, name, types, sprite }) => {
  return (
    <div className="pokemon-row">
      <img src={sprite} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>ID: {id}</p>
        <p>Types: {types.join(', ')}</p>
      </div>
    </div>
  );
};

export default PokemonRow;
