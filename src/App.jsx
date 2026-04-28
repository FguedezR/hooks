import useCustomHook from "./hooks/useCustomHook";
import "./App.css";

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/1";
const urlRick = "https://rickandmortyapi.com/api/character/1";

function App() {
  //usamos el hook por cada url
  const pokemon = useCustomHook(urlPokemon);
  const rick = useCustomHook(urlRick);

  return (
    <div>
      <h2>Personaje Pokemon</h2>
      {/* el ? optional chaining */}
      <p>{pokemon?.name}</p>
      <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />

      <h2>Personaje Rick and Morty</h2>
      <p>{rick?.name}</p>
      <img src={rick?.image} alt={rick?.name} />
    </div>
  );
}

export default App;
