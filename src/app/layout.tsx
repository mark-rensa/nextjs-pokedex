import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Navigation } from "@/components/navigation";

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
        <div className="pokedex bg-pokedex-case relative mx-auto my-1 min-h-[75dvh] rounded-4xl">
          <Header />
          <div className="under-plate mb-8 grid grid-cols-[1fr_100px] py-20">
            <main className="mt-5 px-16">
              <div className="pokedex-screen bg-pokedex-screen relative isolate min-h-96 overflow-clip rounded-md p-8 text-black">
                {children}
              </div>
            </main>
            <aside className="pr-4">
              <Navigation />
            </aside>
          </div>
        </div>
        <Footer />
        <div className="dot-pattern" aria-hidden="true" />
      </body>
    </html>
  );
}
