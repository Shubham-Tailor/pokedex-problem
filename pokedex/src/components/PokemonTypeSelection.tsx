import React from 'react';

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const types = ['grass', 'fire', 'water', 'electric', 'rock', 'psychic']; // Add more types as needed

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({ selectedType, selectType }) => {
  return (
    <div>
      <h2>Select Pokémon Type</h2>
      <select value={selectedType} onChange={(e) => selectType(e.target.value)}>
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PokemonTypeSelection;
