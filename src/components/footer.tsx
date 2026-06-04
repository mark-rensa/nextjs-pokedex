export function Footer() {
  return (
    <footer className="border-t border-dashed py-6">
      <p className="text-center font-bold">
        &copy; {new Date().getFullYear()} Pokédex - By Mark Teekman
      </p>
    </footer>
  );
}
