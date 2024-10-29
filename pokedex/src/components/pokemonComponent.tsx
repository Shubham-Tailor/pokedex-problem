import React, { useState } from 'react';
import { trpc } from '../utils/trpc'; // Ensure the path is correct
import PokemonRow from './PokemonRow';

const PokemonComponent: React.FC = () => {
  const [pokemonName, setPokemonName] = useState('');
  // const [pokemonData, setPokemonData] = useState<any>(null);
  const [pokemonData, setPokemonData] = useState<{ id: number; name: string; types: string[]; sprite: string } | null>(null);


  const { data, error, isLoading } = trpc.pokemon.getPokemon.useQuery(pokemonName, {
    enabled: !!pokemonName, // Only run the query if pokemonName is not empty
    onSuccess: (data) => {
      setPokemonData(data);
    },
    onError: () => {
      setPokemonData(null); // Clear previous data if there's an error
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // The query will run automatically due to the 'enabled' option above
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Enter Pokémon name"
        />
        <button type="submit">Get Pokémon</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching Pokémon: {error.message}</p>}
      {pokemonData && (
        <PokemonRow
          id={pokemonData.id}
          name={pokemonData.name}
          types={pokemonData.types}
          sprite={pokemonData.sprite}
        />
      )}
    </div>
  );
};

export default PokemonComponent;
