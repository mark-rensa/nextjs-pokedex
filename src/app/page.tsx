import { gql } from "@apollo/client";
import { query } from "@/lib/apollo-client";
import { PokeSlot } from "../components/pokeslot";
import type { PokemonTypes } from "./types";

interface TypeName {
  name: PokemonTypes;
}

interface PokemonTypeNames {
  typenames: TypeName[];
}

interface PokemonTypeEntry {
  type: PokemonTypeNames;
}

interface PokemonForm {
  pokemontypes: PokemonTypeEntry[];
}

interface Pokemons {
  id: number;
  name: string;
  pokemons: PokemonForm[];
}

const GET_POKEMON = gql`
  query GetPokemon {
    pokemon: pokemonspecies(limit: 9) {
      name
      id
      pokemons {
        pokemontypes {
          type {
            typenames(where: { language_id: { _eq: 9 } }) {
              name
            }
          }
        }
      }
    }
  }
`;

export default async function Home() {
  const { data } = await query<{ pokemon: Pokemons[] }>({
    query: GET_POKEMON,
  });

  // TODO: Improve error handeling:
  // 1. try/catch
  // 2. app/error.tsx
  // 3. Apollo error handeling
  // 4/ loading.tsx
  if (!data) return <p>We have hit an error..</p>;

  const pokemons: Pokemons[] = data.pokemon;

  /* Returns the type names of a pokemon species (only the first Pokemon form) */
  function typeNames(species: PokemonForm[]): PokemonTypes[] {
    const firstItem = species[0];

    if (!firstItem) return [];

    return firstItem.pokemontypes.flatMap((t) =>
      t.type.typenames.map((n) => n.name),
    );
  }

  return (
    <div className="pokedex-index">
      <div className="pokedex-index-header">
        <h1 className="text-xl">National Pokédex</h1>
        <p className="pokedex-index-count">
          {String(pokemons.length).padStart(3, "0")} entries
        </p>
      </div>
      <ul className="pokedex-grid grid grid-cols-3">
        {pokemons.map((pokemon) => (
          <PokeSlot
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={typeNames(pokemon.pokemons)}
            image={{
              src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
            }}
          />
        ))}
      </ul>
    </div>
  );
}
