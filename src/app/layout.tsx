import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/footer";
import { Navigation } from "@/components/navigation";
import { PokedexScreen } from "@/components/pokedex-screen";
import { PokedexCase } from "@/components/pokedex-case";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Pokédex",
  description: "A Pokédex app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixelifySans.variable} h-full antialiased`}>
      <body className="flex flex-col py-8 font-sans">
        <PokedexCase>
          <main className="mt-5 px-16">
            <PokedexScreen>{children}</PokedexScreen>
          </main>
          <aside className="pr-4">
            <Navigation />
          </aside>
        </PokedexCase>
        <Footer />
        <div className="dot-pattern" aria-hidden="true" />
      </body>
    </html>
  );
}
