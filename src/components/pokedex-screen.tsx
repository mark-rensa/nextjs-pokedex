import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PokedexScreen({ children }: Props): ReactNode {
  return (
    <div className="pokedex-screen bg-pokedex-screen relative isolate min-h-96 overflow-clip rounded-md p-8 text-black">
      {children}
    </div>
  );
}
