import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/lib/apollo-client";

type Props = {
  children: ReactNode;
};

export function PokedexScreen({ children }: Props): ReactNode {
  return (
    <ApolloProvider client={client}>
      <div className="pokedex-screen bg-pokedex-screen relative isolate min-h-96 overflow-clip rounded-md p-8 text-black">
        {children}
      </div>
    </ApolloProvider>
  );
}
