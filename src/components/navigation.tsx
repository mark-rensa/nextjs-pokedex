import Link from "next/link";
import { Funnel, Home, Info, Search } from "lucide-react";
import type { ReactNode } from "react";

export function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <MenuItem>
          <Home />
        </MenuItem>
        <MenuItem>
          <Info />
        </MenuItem>
        <MenuItem>
          <Search />
        </MenuItem>
        <MenuItem>
          <Funnel />
        </MenuItem>
      </ul>
    </nav>
  );
}

function MenuItem({ children }: { children: ReactNode }) {
  return (
    <li>
      <Link
        href="/"
        className="bg-pokedex-case-outer grid h-16 w-16 place-items-center rounded-md"
      >
        {children}
      </Link>
    </li>
  );
}
