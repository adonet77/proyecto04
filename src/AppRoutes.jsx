import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";

/**
 * Rutas básicas de la aplicación. Importar y usar en `App.jsx`.
 */
export default function AppRoutes() {
  return (
    <BrowserRouter basename="/proyecto4">
      <ToastProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
            {/* Rutas futuras: /product/:id, /checkout */}
          </Routes>
          <Footer />
        </CartProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}
