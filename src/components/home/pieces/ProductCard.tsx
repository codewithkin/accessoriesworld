"use client";
import Image from "next/image";
import { Product } from "../ProductsSwiper";
import { Button } from "@/components/ui/button";
import { Check, Info, Plus } from "lucide-react";
import { toast } from "sonner";
import CartDrawer from "@/components/reusable/secondary/CartDrawer";
import { useCartStore } from "@/stores/useCartStore";

function ProductCard({ product }: { product: Product }) {
  // Add to cart function
  const addToCart = useCartStore((state) => state.addItemToCart);

  // Figure out whether or not the item is currently in our cart
  const isInCart = useCartStore((state) =>
    state.cart.some((item) => item.name === product.name),
  );

  const addItemToCart = (item: Product) => {
    try {
      // Add product to cart
      addToCart(item);

      // Show a success toast
      toast.success(`Successfully added 1 ${item.name} to cart`, {
        action: <CartDrawer />,
      });
    } catch (e) {
      console.log(`An error occured while adding ${item.name} item to cart`);
    }
  };

  return (
    <article className="flex flex-col gap-4 w-full">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="rounded-lg w-full h-full"
      />

      {/* Product details */}
      <article className="flex flex-col gap-4 justify-center">
        {/* Product category and price */}
        <article className="w-full flex justify-between items-center">
          <h4>{product.category}</h4>
          <h4 className="font-semibold text-lg">${product.price}</h4>
        </article>

        {/* Product name */}
        <article>
          <h4 className="text-xl font-semibold">{product.name}</h4>
          <p>
            <span className="font-semibold text-slate-500">
              {product.stock}
            </span>{" "}
            items left
          </p>
        </article>

        {/* Add to cart btn */}
        <article className="flex md:flex-row flex-col gap-2 items-center w-full">
          <Button
            disabled={isInCart}
            className="flex gap-2 items-center md:w-fit w-full"
            onClick={() => addItemToCart(product)}
            variant={isInCart ? "secondary" : "default"}
          >
            <span className="font-medium">
              {isInCart ? "Added to cart" : "Add to cart"}
            </span>
            {isInCart ? <Check size={24} /> : <Plus size={24} />}
          </Button>
          <Button
            className="flex gap-2 items-center md:w-fit w-full"
            variant="ghost"
          >
            <span>More info</span>
            <Info size={24} />
          </Button>
        </article>
      </article>
    </article>
  );
}

export default ProductCard;
