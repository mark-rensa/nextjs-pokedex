import { pokemon } from "../app/_mock-data";
import { PokeSlot } from "../components/pokeslot";
import { query } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

const pokemonList = pokemon;
// https://www.apollographql.com/docs/deploy-preview/e0e8a8504a18a502cb40/react/integrations/nextjs
// https://nextjs.org/docs/app/getting-started/server-and-client-components
// https://graphql.pokeapi.co/v1beta2/console/

type PokemonType = {
  pokemons: {
    pokemontypes: {
      type: {
        typenames: {
          name: string;
        }[];
      };
    }[];
  };
}[];

interface Pokemons {
  id: string;
  name: string;
  type: PokemonType[];
}

const GET_POKEMON = gql`
  query GetPokemon {
    pokemon: pokemonspecies(limit: 10) {
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

  if (!data) return <p>We have hit an error</p>;

  const pokemons: Pokemons[] = data.pokemon;

  return (
    <div>
      <h1 className="text-2xl">Welcome to the Pokédex</h1>
      <ul className="grid grid-cols-3 gap-4">
        {pokemons.map((pokemon) => (
          <PokeSlot
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.pokemons.pokemontypes.type.typenames}
            // image={{ src: pokemon.image.src, alt: pokemon.name }}
          />
        ))}
      </ul>
    </div>
  );
}
