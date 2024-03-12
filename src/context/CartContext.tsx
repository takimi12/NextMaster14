"use client";

import {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

export type ProductInCart = {
  quantity: number;
  name: string;
};

type CartContextProps = {
  productsInCart: string;
  editProduct: (name: string, action: "increase" | "decrease") => void;
};

const CartContext = createContext<CartContextProps | null>(null);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productsInCart, setProductsInCart] = useState<string>("");

  useEffect(()=>{
    setProductsInCart(localStorage.getItem("products") || "");
  },[])

  const editProduct = (name: string, action: "increase" | "decrease") => {
    const inCart: ProductInCart[] = JSON.parse(productsInCart || "[]");
    const isInCart = inCart.find(
      (product: ProductInCart) => product.name === name
    );
    if (isInCart) {
      const newProducts = inCart.map((el) => {
        if (el.name === name) {
          return {
            ...el,
            quantity: action === "increase" ? el.quantity + 1 : el.quantity - 1,
          };
        }
        return el;
      });
      const onlyPositive=newProducts.filter(pr=>pr.quantity>0)
      setProductsInCart(JSON.stringify(onlyPositive));
      localStorage.setItem("products", JSON.stringify(onlyPositive));
    } else {
      setProductsInCart(() => {
        const newItems = [...inCart, { name, quantity: 1 }];
        localStorage.setItem("products", JSON.stringify(newItems));
        return JSON.stringify(newItems);
      });
    }
  };

  return (
    <CartContext.Provider value={{ productsInCart, editProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext=()=>{
    const ctx=useContext(CartContext)
    if(!ctx){
        throw new Error("");
    }
    return ctx;
}