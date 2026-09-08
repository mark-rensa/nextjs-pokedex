import { notFound } from "next/navigation";

// const GET_POKEMON = gql`
//   query GetPokemon {
//     pokemon: pokemonspecies(limit: 9) {
//       name
//       id
//       pokemons {
//         pokemontypes {
//           type {
//             typenames(where: { language_id: { _eq: 9 } }) {
//               name
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default async function PokemonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemonId = Number(id);

  if (!Number.isInteger(pokemonId)) {
    notFound();
  }

  return <div>Placeholder: {pokemonId}</div>;
}
