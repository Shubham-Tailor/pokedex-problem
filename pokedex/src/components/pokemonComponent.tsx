import { trpc } from '../utils/trpc';

const PokemonComponent = () => {
  const { data, isLoading, error } = trpc.pokemon.getPokemon.useQuery('Raichu');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>; // Check for errors
  if (!data) return <div>Pokémon not found</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.sprite} alt={data.name} />
      <p>Types: {data.types.join(', ')}</p>
    </div>
  );
};

export default PokemonComponent;
