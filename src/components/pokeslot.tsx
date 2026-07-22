import Image from "next/image";
import type { ReactNode } from "react";
import Badge from "./badge";

type Props = {
  name: string;
  type: string[];
  image?: {
    src: string;
    alt: string;
  };
};

export function PokeSlot({ name, type, image }: Props): ReactNode {
  return (
    <li className="flex flex-col items-center gap-2">
      <p className="first-letter:uppercase">{name}</p>
      <span className="flex flex-wrap justify-center gap-1">
        {type.map((pokemonType) => (
          <Badge key={pokemonType}>{pokemonType}</Badge>
        ))}
      </span>
      {image && image.src && (
        <Image src={image.src} alt={image.alt} width={80} height={80} />
      )}
    </li>
  );
}
