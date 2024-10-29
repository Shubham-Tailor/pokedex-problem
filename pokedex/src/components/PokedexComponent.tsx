import React, { useState } from 'react';
import { trpc } from '../utils/trpc';
import PokedexTable from './PokedexTable';

const PokedexComponent: React.FC = () => {
  const [pokemonNames, setPokemonNames] = useState<string>('');
  const { data, error, isLoading } = trpc.pokemon.getPokemonArray.useQuery(
    pokemonNames.split(',').map(name => name.trim()), 
    {
      enabled: !!pokemonNames,
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // The query will automatically run due to the 'enabled' option
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pokemonNames}
          onChange={(e) => setPokemonNames(e.target.value)}
          placeholder="Enter Pokémon names, separated by commas"
        />
        <button type="submit">Get Pokémon</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching Pokémon: {error.message}</p>}
      {data && <PokedexTable pokemonArray={data} />}
    </div>
  );
};

export default PokedexComponent;
