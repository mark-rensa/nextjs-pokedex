import type { ReactNode } from "react";

type PokemonTypes =
  | "Bug"
  | "Dark"
  | "Dragon"
  | "Electric"
  | "Fairy"
  | "Fighting"
  | "Fire"
  | "Flying"
  | "Ghost"
  | "Grass"
  | "Ground"
  | "Ice"
  | "Normal"
  | "Poison"
  | "Psychic"
  | "Rock"
  | "Steel"
  | "Water";

type Props = {
  children: ReactNode;
  variant: PokemonTypes;
};

const typeClasses: Record<PokemonTypes, string> = {
  Bug: "border-lime-600 bg-lime-100 text-lime-800",
  Dark: "border-zinc-700 bg-zinc-100 text-zinc-800",
  Dragon: "border-indigo-600 bg-indigo-100 text-indigo-800",
  Electric: "border-yellow-500 bg-yellow-100 text-yellow-800",
  Fairy: "border-pink-400 bg-pink-100 text-pink-800",
  Fighting: "border-red-700 bg-red-100 text-red-800",
  Fire: "border-orange-600 bg-orange-100 text-orange-800",
  Flying: "border-sky-400 bg-sky-100 text-sky-800",
  Ghost: "border-purple-700 bg-purple-100 text-purple-800",
  Grass: "border-green-600 bg-green-100 text-green-800",
  Ground: "border-amber-600 bg-amber-100 text-amber-800",
  Ice: "border-cyan-400 bg-cyan-100 text-cyan-800",
  Normal: "border-slate-400 bg-slate-100 text-slate-800",
  Poison: "border-fuchsia-600 bg-fuchsia-100 text-fuchsia-800",
  Psychic: "border-pink-600 bg-pink-100 text-pink-800",
  Rock: "border-stone-500 bg-stone-100 text-stone-800",
  Steel: "border-slate-500 bg-slate-100 text-slate-800",
  Water: "border-blue-600 bg-blue-100 text-blue-800",
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
