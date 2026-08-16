import React from "react";

export default function CartSummary({ subtotal, onClear }) {
  return (
    <aside
      style={{
        border: "1px solid #eee",
        padding: 12,
        borderRadius: 6,
        minWidth: 240,
      }}
    >
      <h3>Resumen</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Subtotal</span>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>
      <div style={{ marginTop: 12 }}>
        <button className="btn" style={{ width: "100%" }}>
          Proceder al pago
        </button>
      </div>
      <div style={{ marginTop: 8 }}>
        <button onClick={onClear} style={{ width: "100%" }}>
          Vaciar carrito
        </button>
      </div>
    </aside>
  );
}
