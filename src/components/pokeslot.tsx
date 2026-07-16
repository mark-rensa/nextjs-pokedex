import Image from "next/image";
import { ReactNode } from "react";

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
    <li>
      <span>{name}</span>
      <span>{type}</span>
      {image && image.src && (
        <Image src={image.src} alt={image.alt} width={80} height={80} />
      )}
    </li>
  );
}
