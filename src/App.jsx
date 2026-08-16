import AppRoutes from "./AppRoutes";
import "./styles/global.css";

/**
 * App shell mínimo que integra el router y estilos globales.
 * Mantener pequeño para facilitar testing y extensiones.
 */
export default function App() {
  return <AppRoutes />;
}
