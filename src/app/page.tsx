// import { pokemon } from "../app/_mock-data";
import { PokeSlot } from "../components/pokeslot";
import { gql, useQuery } from "@apollo/client";

// const pokemonList = pokemon;

const GET_POKEMON = gql`
  query GetPokemon {
    pokemonList {
      id
      name
      type
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_POKEMON);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="text-2xl">Welcome to the Pokedex</h1>
      <ul className="grid grid-cols-3 gap-4">
        {data.pokemonList.map(
          (pokemon: { id: string; name: string; type: string }) => (
            <PokeSlot
              key={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              // image={{ src: pokemon.image.src, alt: pokemon.name }}
            />
          ),
        )}
      </ul>
    </div>
  );
}
