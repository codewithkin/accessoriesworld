"use client";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import CartDrawer from "./secondary/CartDrawer";
import { Button } from "../ui/button";
import MobileMenuCart from "./secondary/MobileMenuCart";

function MobileNavbar() {
  // Track the open / close state of the mobile navbar
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="grid md:hidden w-full">
      <article className="flex p-4 gap-2 w-full justify-between items-center">
        <Button variant="default" type="button" onClick={() => setOpen(!open)}>
          <Menu />
        </Button>

        {open && <MobileMenuCart />}

        <h1 className="text-2xl text-red-500 font-semibold">
          Accessories World
        </h1>
        <CartDrawer />
      </article>
    </nav>
  );
}

export default MobileNavbar;
