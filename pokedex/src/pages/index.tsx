import PokemonComponent from '../components/pokemonComponent';
import PokedexComponent from '../components/PokedexComponent';
import FilterablePokedexTable from '../components/FilterablePokedexTable';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Pokédex</h1>
      <PokemonComponent />
      <PokedexComponent />
      <FilterablePokedexTable />
    </div>
  );
};

export default HomePage;
