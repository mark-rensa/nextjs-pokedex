import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PokedexScreen({ children }: Props): ReactNode {
  return (
    <div className="pokedex-screen bg-pokedex-screen relative isolate max-h-96 scrollbar-thumb-purple-700 overflow-y-scroll rounded-md p-8 text-black">
      {children}
    </div>
  );
}
