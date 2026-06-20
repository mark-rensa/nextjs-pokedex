"use client";

import Link from "next/link";
import { Activity, Funnel, Home, Info, Search } from "lucide-react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

export function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <MenuItem href="/" label="Home">
          <Home />
        </MenuItem>
        <MenuItem href="/about" label="About">
          <Info />
        </MenuItem>
        <MenuItem href="/search" label="Search">
          <Search />
        </MenuItem>
        <MenuItem href="/filter" label="Filter">
          <Funnel />
        </MenuItem>
        <MenuItem href="/motion" label="Motion">
          <Activity />
        </MenuItem>
      </ul>
    </nav>
  );
}

function MenuItem({
  href,
  label,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  const currentPath = usePathname();

  return (
    <li>
      <Link
        href={href}
        aria-current={currentPath === href ? "page" : undefined}
        className="pokedex-nav-button grid h-16 w-16 place-items-center rounded-md"
      >
        {children}
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
}
