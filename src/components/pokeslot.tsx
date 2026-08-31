import Image from "next/image";
import type { ReactNode } from "react";
import type { PokemonTypes } from "../app/types";
import PokemonTypeBadge from "./pokemon-type-badge";
import Link from "next/link";

type Props = {
  id: number;
  name: string;
  types: PokemonTypes[];
  image?: {
    src: string;
  };
};

export function PokeSlot({ id, name, types, image }: Props): ReactNode {
  return (
    <li>
      <Link
        href="/"
        className="pokeslot relative flex flex-col items-center gap-2 p-3 text-center"
      >
        <span className="pokeslot-number" aria-hidden="true">
          #{String(id).padStart(3, "0")}
        </span>
        {image && image.src && (
          <Image
            src={image.src}
            alt=""
            width={88}
            height={88}
            className="pokeslot-image"
          />
        )}
        <p className="leading-none first-letter:uppercase">{name}</p>
        <span className="flex flex-wrap justify-center gap-1">
          {types.map((pokemonType) => (
            <PokemonTypeBadge key={pokemonType} variant={pokemonType}>
              {pokemonType}
            </PokemonTypeBadge>
          ))}
        </span>
      </Link>
    </li>
  );
}
