import { Product } from "@/components/home/ProductsSwiper";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React from "react";

function ProductInCart({ product }: { product: Product }) {
  return (
    <article className="rounded-xl border border-slate-400 p-4 flex gap-8 items-center justify-between">
      {/* Product detais (image, name, price) */}
      <article className="flex gap-2 items-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-16 h-16 rounded-md"
        />
        <article>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p>${product.price}</p>
        </article>
      </article>

      {/* Remove from cart btn */}
      <Button variant="destructive">
        <Trash size={24} />
      </Button>
    </article>
  );
}

export default ProductInCart;
