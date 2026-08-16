import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

export default function Header() {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.quantity, 0);

  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) {
        setDark(stored === "dark");
        document.documentElement.classList.toggle(
          "theme-dark",
          stored === "dark",
        );
      } else {
        const prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDark(prefersDark);
        document.documentElement.classList.toggle("theme-dark", prefersDark);
      }
    } catch (e) {}
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {}
    document.documentElement.classList.toggle("theme-dark", next);
  };

  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Casa Brava, inicio">
        <span className="brand__mark">CB</span>
        <span>Casa Brava</span>
      </Link>
      <nav className="site-nav" aria-label="Navegación principal">
        <Link to="/">Inicio</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/catalog">Catálogo</Link>
        <Link to="/cart" className="cart-link">
          Carrito <span>{count}</span>
        </Link>
        <button
          aria-pressed={dark}
          onClick={toggle}
          title="Cambiar tema"
          className="theme-toggle"
        >
          {dark ? "Claro" : "Oscuro"}
        </button>
      </nav>
    </header>
  );
}
