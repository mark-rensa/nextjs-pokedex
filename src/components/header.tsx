"use client";

import { Logo } from "./logo";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="bg-pokedex-red py-8">
      <div className="wrapper flex items-center justify-between gap-8">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
