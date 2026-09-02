import { gql } from "@apollo/client";
import type { PokemonListItem, PokemonTypes } from "@/app/types";
import { query } from "@/lib/apollo-client";
import { MOCK_POKEMON } from "@/lib/pokemon.mock";

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

interface PokemonSpecies {
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

function getTypeNames(forms: PokemonForm[]): PokemonTypes[] {
  const firstForm = forms[0];

  if (!firstForm) return [];

  return firstForm.pokemontypes.flatMap(({ type }) =>
    type.typenames.map(({ name }) => name),
  );
}

export async function getPokemon(): Promise<PokemonListItem[]> {
  if (process.env.POKEAPI_DATA_SOURCE === "mock") {
    return MOCK_POKEMON;
  }

  const { data } = await query<{ pokemon: PokemonSpecies[] }>({
    query: GET_POKEMON,
  });

  if (!data) return [];

  return data.pokemon.map(({ id, name, pokemons }) => ({
    id,
    name,
    types: getTypeNames(pokemons),
  }));
}
