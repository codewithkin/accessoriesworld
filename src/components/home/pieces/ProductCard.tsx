"use client";
import Image from "next/image";
import { Product } from "../ProductsSwiper";
import { Button } from "@/components/ui/button";
import { Info, Plus } from "lucide-react";
import { toast } from "sonner";
import CartDrawer from "@/components/reusable/secondary/CartDrawer";

function ProductCard({ product }: { product: Product }) {
  const addToCart = (item: Product) => {
    try {
      // Simulate adding to cart
      toast.success(`Successfully added 1 ${item.name} to cart`, {
        action: <CartDrawer />,
      });
    } catch (e) {
      console.log(`An error occured while adding ${item.name} item to cart`);
    }
  };

  return (
    <article className="flex flex-col gap-4 w-fit">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="rounded-lg w-full h-80"
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
            className="flex gap-2 items-center w-fit"
            onClick={() => addToCart(product)}
            variant="default"
          >
            <span className="font-medium">Add to cart</span>
            <Plus size={24} />
          </Button>
          <Button className="flex gap-2 items-center w-fit" variant="ghost">
            <span>More info</span>
            <Info size={24} />
          </Button>
        </article>
      </article>
    </article>
  );
}

export default ProductCard;
