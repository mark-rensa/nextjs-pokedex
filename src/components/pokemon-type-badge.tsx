import type { ReactNode } from "react";

type PokemonType = "Grass";

type Props = {
  children: ReactNode;
  variant: PokemonType;
};

const typeClasses: Record<PokemonType, string> = {
  Grass: "border-green-600 bg-green-100 text-green-800",
};

export default function PokemonTypeBadge({
  children,
  variant,
}: Props): ReactNode {
  const selectedTypeClass = typeClasses[variant];

  return (
    <span
      className={`rounded-sm border ${selectedTypeClass ?? ""} px-2 py-1 text-xs`}
    >
      {children}
    </span>
  );
}
