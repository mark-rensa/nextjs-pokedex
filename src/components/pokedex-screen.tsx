import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PokedexScreen({ children }: Props): ReactNode {
  return (
    <div className="pokedex-screen bg-pokedex-screen relative isolate overflow-hidden rounded-md text-black">
      <div className="pokedex-screen-content max-h-96 overflow-y-scroll p-8 scrollbar-thumb-purple-700">
        {children}
      </div>
    </div>
  );
}
