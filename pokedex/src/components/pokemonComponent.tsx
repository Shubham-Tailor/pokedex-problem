import { trpc } from '../utils/trpc';

const PokemonComponent = () => {
  const { data, isLoading } = trpc.pokemon.getPokemon.useQuery('Bulbasaur');

  if (isLoading) return <div>Loading...</div>;
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
