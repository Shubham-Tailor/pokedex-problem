import React, { useState } from 'react';
import { trpc } from '../utils/trpc';
import PokemonTypeSelection from './PokemonTypeSelection';
import PokedexTable from './PokedexTable';

const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  const { data, error, isLoading } = trpc.pokemon.getPokemonByType.useQuery(selectedType || '', {
    enabled: !!selectedType, // Only run the query if a type is selected
  });

  const handleSelectType = (type: string | undefined) => {
    setSelectedType(type);
  };

  return (
    <div>
      <PokemonTypeSelection selectedType={selectedType} selectType={handleSelectType} />
      
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching Pokémon: {error.message}</p>}
      {data && <PokedexTable pokemonArray={data} />}
    </div>
  );
};

export default FilterablePokedexTable;
