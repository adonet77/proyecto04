import React from "react";
import Button from "../ui/Button";
import { useToast } from "../../context/ToastContext";

/**
 * Tarjeta de producto reutilizable.
 * @param {{product: Object, onAdd?: Function}} props
 */
export default function ProductCard({ product, onAdd }) {
  const { id, name, price, image, abv, stock } = product;
  const { show } = useToast();
  const fallbackImage =
    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  const imageBackground = {
    ron: "radial-gradient(circle at 68% 35%, #d18a4c 0 18%, transparent 19%), linear-gradient(135deg, #3d2520, #bd6940 52%, #e9c08a)",
    vodka:
      "radial-gradient(circle at 68% 35%, #d8e7dc 0 18%, transparent 19%), linear-gradient(135deg, #bfd4c8, #f5f0dd 52%, #8caea0)",
    whisky:
      "radial-gradient(circle at 68% 35%, #c98743 0 18%, transparent 19%), linear-gradient(135deg, #2d3128, #8d6a3f 52%, #d7ae67)",
  }[product.category];

  const handleAdd = () => {
    if (stock <= 0) {
      show &&
        show(`${name} no disponible (agotado)`, {
          duration: 2500,
          type: "info",
        });
      return;
    }
    if (onAdd) onAdd(product);
    show &&
      show(`${name} añadido al carrito`, { duration: 2500, type: "info" });
  };

  return (
    <article className="product-card" aria-labelledby={`product-${id}-title`}>
      <img
        src={image}
        alt={name}
        className="product-card__image"
        style={{ background: imageBackground }}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = fallbackImage;
        }}
      />
      <div className="product-card__body">
        <h3 id={`product-${id}-title`} className="product-card__title">
          {name}
        </h3>
        <p className="product-card__meta">
          {abv}% • {stock > 0 ? "En stock" : "Agotado"}
        </p>
        <p className="product-card__meta">{stock} unidades</p>
        <div className="product-card__footer">
          <span className="product-card__price">${price.toFixed(2)}</span>
          <Button
            onClick={handleAdd}
            className="product-card__add"
            disabled={stock <= 0}
          >
            Añadir
          </Button>
        </div>
      </div>
    </article>
  );
}
