import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export function PokedexScreen({ children }: Props): ReactNode {
	return (
		<div className="pokedex-screen bg-pokedex-screen relative isolate h-full overflow-hidden rounded-md text-black">
			<div className="pokedex-screen-content max-h-96 overflow-y-scroll p-8 scrollbar-thumb-pokedex-screen">
				{children}
			</div>
		</div>
	);
}
