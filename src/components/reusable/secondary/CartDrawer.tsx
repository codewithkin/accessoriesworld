import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { CircleSlash, ShoppingCart } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function CartDrawer() {
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

        <article className="flex flex-col gap-4 items-center justify-center text-center w-full h-full">
          <CircleSlash className="text-slate-500" size={75} strokeWidth={1.5} />
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
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;
