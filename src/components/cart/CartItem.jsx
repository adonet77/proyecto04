import React from "react";

/**
 * Cart item row with controls.
 * Props: item {id,name,price,quantity,image}, onRemove, onUpdateQty
 */
export default function CartItem({ item, onRemove, onUpdateQty }) {
  return (
    <div
      className="cart-item"
      style={{
        display: "flex",
        gap: 12,
        padding: 12,
        alignItems: "center",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{ width: 64, height: 64, objectFit: "cover" }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600 }}>{item.name}</div>
        <div style={{ color: "#666" }}>${item.price.toFixed(2)}</div>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button
          onClick={() => onUpdateQty(item.id, Math.max(1, item.quantity - 1))}
        >
          -
        </button>
        <div>{item.quantity}</div>
        <button onClick={() => onUpdateQty(item.id, item.quantity + 1)}>
          +
        </button>
      </div>
      <div style={{ width: 120, textAlign: "right" }}>
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <button onClick={() => onRemove(item.id)} style={{ marginLeft: 8 }}>
        Eliminar
      </button>
    </div>
  );
}
