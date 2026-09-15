import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  id: number;
};

export default function PokeSprite({ id }: Props): ReactNode {
  return (
    <Image
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
      alt=""
      width={88}
      height={88}
      className="pokeslot-image"
    />
  );
}
