import React from "react";
import useCart from "../hooks/useCart";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clear, subtotal } = useCart();

  if (items.length === 0)
    return (
      <main style={{ padding: 24 }}>
        <h1>Carrito</h1>
        <p>Tu carrito está vacío.</p>
      </main>
    );

  return (
    <main
      style={{
        padding: 24,
        display: "grid",
        gridTemplateColumns: "1fr 320px",
        gap: 24,
      }}
    >
      <section>
        <h1>Carrito</h1>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={removeItem}
            onUpdateQty={updateQuantity}
          />
        ))}
      </section>

      <CartSummary subtotal={subtotal} onClear={clear} />
    </main>
  );
}
