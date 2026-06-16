import { Copyright } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20">
      <p className="mb-5 flex flex-wrap items-center justify-center gap-2 font-bold">
        <Copyright size={20} />
        {new Date().getFullYear()} Pokédex App - By{" "}
        <a
          href="https://markteekman.nl"
          className="underline decoration-2 underline-offset-4 hover:no-underline"
        >
          Mark Teekman
        </a>
        . Tech stack:
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 inset-ring inset-ring-yellow-400/20">
          Next.js
        </span>
        <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-500/20">
          TypeScript
        </span>
        <span className="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-400 inset-ring inset-ring-purple-400/30">
          Tailwind
        </span>
        <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30">
          GraphQL
        </span>
        <span className="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
          Accessibility
        </span>
        <span className="inline-flex items-center rounded-md bg-pink-400/10 px-2 py-1 text-xs font-medium text-pink-400 inset-ring inset-ring-pink-400/20">
          Motion
        </span>
        <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
          GitHub
        </span>
        <span className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 inset-ring inset-ring-red-400/20">
          Netlify
        </span>
      </div>
    </footer>
  );
}
