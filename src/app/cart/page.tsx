"use client";

import { ProductInCart, useCartContext } from "@/context/CartContext";

export default function CartPage() {
  const { productsInCart,editProduct } = useCartContext();
  const currentCart:ProductInCart[] = JSON.parse(productsInCart || "[]");

  if (!currentCart) {
    return <p>Pusty koszyk!</p>;
  }
  return (
    <section>
      {currentCart.map((el) => (
        <div key={el.name}>
          <p>{el.name}</p>
          <button data-test-id="decrement" onClick={()=>editProduct(el.name,"decrease")}>decrease</button>
          <p data-testid="quantity">{el.quantity}</p>
          <button data-test-id="increment" onClick={()=>editProduct(el.name,"increase")}>increase</button>
        </div>
      ))}
    </section>
  );
}