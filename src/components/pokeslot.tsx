import Image from "next/image";
import type { ReactNode } from "react";
import PokemonTypeBadge from "./pokemon-type-badge";
import Link from "next/link";

type Props = {
  name: string;
  types: string[];
  image?: {
    src: string;
    alt: string;
  };
};

export function PokeSlot({ name, types, image }: Props): ReactNode {
  return (
    <li>
      <Link
        href="/"
        className="flex flex-col items-center gap-2 rounded-md border-2 border-gray-500 p-4 transition duration-300 hover:bg-amber-100"
      >
        <p className="first-letter:uppercase">{name}</p>
        <span className="flex flex-wrap justify-center gap-1">
          {types.map((pokemonType) => (
            <PokemonTypeBadge key={pokemonType} variant={pokemonType}>
              {pokemonType}
            </PokemonTypeBadge>
          ))}
        </span>
        {image && image.src && (
          <Image
            src={image.src}
            alt={image.alt}
            width={80}
            height={80}
            className="order-first"
          />
        )}
      </Link>
    </li>
  );
}
