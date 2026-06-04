"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav>
      <ul className="flex flex-wrap items-center gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-xl underline-offset-4 hover:underline ${pathname === link.href ? "font-bold" : undefined}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
