import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

function MobileMenuCart({ update }: any) {
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
    <article className="fixed left-0 right-0 top-0 p-4 flex flex-col bg-white min-h-screen justify-between">
      <article className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold">Navigation Menu</h2>
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

      <Button onClick={update} variant="secondary" className="w-full">
        Close
      </Button>
    </article>
  );
}

export default MobileMenuCart;
