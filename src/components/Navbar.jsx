import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Wishlist", path: "/wishlist" },
    { name: `Cart (${cart.length})`, path: "/cart" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur shadow-sm px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-pink-700">
          StyleBelle
        </Link>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          {links.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-pink-700">
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden max-w-6xl mx-auto flex flex-col gap-4 mt-4 font-medium">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;