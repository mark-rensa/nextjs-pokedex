import { gql } from "@apollo/client";
import { query } from "@/lib/apollo-client";
import { PokeSlot } from "../components/pokeslot";

interface TypeName {
  name: string;
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
    pokemon: pokemonspecies(limit: 20) {
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
  function typeNames(species: PokemonForm[]): string[] {
    const firstItem = species[0];

    if (!firstItem) return [];

    return firstItem.pokemontypes.flatMap((t) =>
      t.type.typenames.map((n) => n.name),
    );
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl">Welcome to the Pokédex</h1>
      <ul className="grid grid-cols-3 gap-4 gap-y-8">
        {pokemons.map((pokemon) => (
          <PokeSlot
            key={pokemon.id}
            name={pokemon.name}
            types={typeNames(pokemon.pokemons)}
            image={{
              src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
              alt: pokemon.name,
            }}
          />
        ))}
      </ul>
    </div>
  );
}
