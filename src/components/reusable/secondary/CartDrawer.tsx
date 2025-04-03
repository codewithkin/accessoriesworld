"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { CircleSlash, Loader2, ShoppingCart } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCartStore } from "@/stores/useCartStore";
import { Product } from "@/components/home/ProductsSwiper";
import ProductInCart from "./ProductInCart";
import { use, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import axios from "axios";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formatCurrency = (amount: number, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
};

function CartDrawer() {
  // Get all the items in the user's cart
  const cart = useCartStore((state) => state.cart);

  // Check whether or not the user's details have been updates
  const [details, setDetails] = useState(false);

  // Clear cart function
  const clearCart = useCartStore((state) => state.clearCart);

  // Track the total price
  const [totalPrice, setToalPrice] = useState(0);

  // Track the customer's name and address
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  useEffect(() => {
    let price = 0;

    // Calculate the total price
    cart.map(
      (prod: Product) => {
        setToalPrice((price += prod.price));
      },
      [cart],
    );
  });

  const { mutate: checkout, isPending: loading } = useMutation({
    mutationKey: ["checkout"],
    mutationFn: async () => {
      // Make a request to paynow

      // Create a new receipt
      const response = await axios.post("/api/receipt", {
        cart: JSON.stringify(cart),
        customerAddress,
        customerName,
        totalAmount: totalPrice
      });

      const receipt = response.data.receipt;

      // Redirect the user to the receipt download page
      redirect(`/receipts/${receipt.id}`);

      return true;
    },
    onSuccess: () => {
      toast.success(
        "Psst, this is a test...real payments will be processed after we setup your bank account",
      );

      // Clear the cart
      clearCart();
    },
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="lg" type="button" variant="ghost">
          <ShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full h-full overflow-y-auto" side="right">
        <SheetHeader>
          <SheetTitle className="text-xl">Your Cart</SheetTitle>
          <SheetDescription>The items you're currently buying</SheetDescription>
        </SheetHeader>

        {cart.length > 0 ? (
          <article className="flex flex-col gap-4 h-full overflow-y-auto p-4">
            {/* Map all of the cart items */}
            {cart.map((product: Product) => (
              <ProductInCart key={product.description} product={product} />
            ))}
          </article>
        ) : (
          <article className="flex flex-col gap-4 items-center justify-center text-center w-full h-full">
            <CircleSlash
              className="text-slate-500"
              size={75}
              strokeWidth={1.5}
            />
            <article className="flex flex-col justify-center items-center gap-2">
              <Badge
                variant="default"
                className="bg-red-600 text-white font-semibold"
              >
                Accessories World
              </Badge>
              <h2 className="text-2xl font-semibold">Cart is empty</h2>
              <p>There's nothing in your cart yet</p>
            </article>
            <article className="flex flex-row md:flex-col gap-2 items-center">
              <Button className="w-full" variant="default" asChild>
                <Link href="/products">Find something to buy</Link>
              </Button>
              <SheetClose asChild>
                <Button className="w-full" variant="secondary">
                  Close
                </Button>
              </SheetClose>
            </article>
          </article>
        )}

        <article className="w-full flex justify-end items-end px-4">
          <article className="flex gap-2 items-center">
            {/* Clear button */}
            <Button
              variant="secondary"
              type="button"
              onClick={() => clearCart()}
            >
              Clear Cart
            </Button>
            {customerAddress.length < 1 || customerName.length < 1 || !details ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="default">Enter details</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <form className="flex flex-col gap-4">
                    <Label>Your details</Label>
                    <Input placeholder="Your name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                    <Input placeholder="Your address" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} />
                    <Button type="button" onClick={() => {
                      toast("Customer name and address updated successfully");

                      // Hide popover
                      setTimeout(() => setDetails(true), 1000)
                    }}>Save</Button>
                  </form>
                </PopoverContent>
              </Popover>
            ) : (
              <Button
                disabled={loading}
                type="button"
                onClick={() => checkout()}
              >
                {loading && <Loader2 className="animate-spin" />}
                <span>{loading ? "Paying..." : "Pay now"}</span>
              </Button>
            )}
          </article>
        </article>

        <article className="p-4 border-t border-slate-300 flex justify-between items-center">
          <h3 className="text-xl font-semibold">Total</h3>

          <p className="text-md font-semibold">{formatCurrency(totalPrice)}</p>
        </article>
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;
