import { Product } from "@/components/home/ProductsSwiper";
import { create } from "zustand";

// Define types
type Action = {
  addItemToCart: (item: Product) => void;
  clearCart: () => void;
};

type State = {
  cart: Product[];
};

// Load cart from localStorage
const getCartFromStorage = (): Product[] => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

export const useCartStore = create<State & Action>((set) => ({
  cart: getCartFromStorage(),
  
  addItemToCart: (item: Product) =>
    set((state) => {
      const updatedCart = [...state.cart, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  
  clearCart: () =>
    set(() => {
      localStorage.removeItem("cart");
      return { cart: [] };
    }),
}));