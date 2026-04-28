import useCustomHook from "./hooks/useCustomHook";
import CharacterCard from "./components/CharacterCard";
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
      {/* sin componentes: */}
      {/* <p>{pokemon?.name}</p> */}
      {/* <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} /> */}

      {/* como componente */}
      <CharacterCard
        name={pokemon?.name}
        image={pokemon?.sprites?.front_default}
      />

      <h2>Personaje Rick and Morty</h2>
      {/* sin componentes: */}
      {/* <p>{rick?.name}</p> */}
      {/* <img src={rick?.image} alt={rick?.name} /> */}

      {/* como componente */}
      <CharacterCard name={rick?.name} image={rick?.image} />
    </div>
  );
}

export default App;
