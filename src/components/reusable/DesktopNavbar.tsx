import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { CircleSlash, ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";

function DesktopNavbar() {
  const links = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "Products",
      href: "/products",
    },
    {
      id: 3,
      title: "About",
      href: "/about",
    },
    {
      id: 4,
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="flex items-center justify-between w-full py-4 px-12">
      <h1 className="text-2xl text-red-500 font-semibold">Accessories World</h1>

      <article className="flex gap-4 items-center justify-center">
        {links.map((link: { title: string; href: string; id: number }) => (
          <Button
            className="text-md text-slate-700 hover:font-semibold font-medium"
            key={link.id}
            variant="link"
            asChild
          >
            <Link href={link.href}>{link.title}</Link>
          </Button>
        ))}
      </article>

      <Sheet>
        <SheetTrigger asChild>
          <Button type="button" variant="ghost">
            <ShoppingCart />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="text-xl">Your Cart</SheetTitle>
            <SheetDescription>
              <p>The items you're currently buying</p>
            </SheetDescription>
          </SheetHeader>

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
            <Button variant="secondary" asChild>
              <Link href="/products">Find something to buy</Link>
            </Button>
          </article>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default DesktopNavbar;
