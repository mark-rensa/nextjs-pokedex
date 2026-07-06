import { pokemon } from "../app/_mock-data";
import { PokeSlot } from "../components/pokeslot";

const pokemonList = pokemon;

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl">Welcome to the Pokedex</h1>
      <ul className="grid grid-cols-3 gap-4">
        {pokemonList.map((pokemon) => (
          <PokeSlot
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            image={{ src: pokemon.image.src, alt: pokemon.name }}
          />
        ))}
      </ul>
    </div>
  );
}
