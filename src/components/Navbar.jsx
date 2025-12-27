import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link to="/" className="text-2xl font-semibold">Lets Function</Link>
        <nav className="flex gap-6 text-sm">
          <Link to="/rentals">Rentals</Link>
          <Link to="/services">Services</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
}