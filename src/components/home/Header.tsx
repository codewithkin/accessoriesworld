"use client";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

function Header() {
  const [header, setHeader] = useState<null | string>(null);

  const headers = [
    "No More Dead Batteries, No More Mess!",
    "Power Up, Tune In, Stay Connected!",
    "Ditch the Frayed Cables, Upgrade Today!",
    "The Accessories You Need, Hassle-Free!",
    "Stay Charged, Stay Tuned, Stay Ready!",
    "Goodbye, Low Battery. Hello, Reliable Power!",
    "Tangled Wires? Dead Batteries? Not Anymore!",
    "Keeping Your Devices Happy, One Accessory Away!",
    "Charge Faster, Listen Longer, Worry Less!",
    "Tech Accessories That Actually Work—Finally!",
    "Premium Accessories, Everyday Convenience, Zero Hassle!",
    "Power Your Devices with Accessories That Last!",
    "Reliable Tech Accessories for Work and Play!",
    "Smart, Durable, Ready to Go—Every Time!",
    "Quality Accessories for a Seamless Experience!",
    "Say Goodbye to Cheap Cables and Static!",
    "Stay Powered, Stay Connected, Stay Hassle-Free!",
    "No More Ghosting Earphones, Just Pure Sound!",
    "Tech Accessories That Keep Up With You!",
    "Charged Up and Ready for Anything!",
    "Fast Charging, Smooth Listening, Zero Frustration!",
    "Tired of Replacing Cables? Try These!",
    "Accessories That Work Harder Than You Do!",
    "Upgrade Your Tech Game With Better Gear!",
    "The Best Accessories for the Best Devices!",
  ];
  const getRandomHeader = () => {
    const randomIndex = Math.floor(Math.random() * headers.length);
    const randomHeader = headers[randomIndex];
    setHeader(randomHeader);
  };

  useEffect(() => {
    getRandomHeader();
  }, []);

  return (
    <motion.header 
    initial={{
      y: 200,
      opacity: 0
    }}

    animate={{
      y: 1,
      opacity: 1
    }}

    transition={{
      duration: 0.8
    }}
    className="min-h-screen w-full flex flex-col justify-center items-center mx-auto p-4 md:p-0">
      <Badge
        className="px-4 py-2 flex items-center gap-4 bg-purple-500 text-white rounded-full"
        variant="outline"
      >
        <span>Say goodbye to mystery cables and earphones that ghost you</span>
      </Badge>
      <article className="flex flex-col gap-2 justify-center items-center text-center">
        <h2 className="text-4xl md:text-6xl font-semibold">
          {header ? header : <Skeleton className="bg-slate-400 w-full h-40" />}
        </h2>
        <p className="text-slate-600 md:max-w-4xl text-center">
          From earphones that won’t bail on you to charging cables that actually
          last—we’ve got the good stuff. No more ‘low battery’ panic or tangled
          messes, just quality accessories that keep up with you
        </p>
      </article>

      {/* Call to Actions */}
      <article className="flex flex-col md:flex-row gap-2 items-center my-4 w-full md:w-fit">
        <Button
          className="w-full md:w-auto flex gap-2 items-center"
          variant="default"
          asChild
        >
          <Link href="/products">
            <ShoppingCart size={24} />
            <span>Shop Now</span>
          </Link>
        </Button>
        <Button
          className="w-full md:w-auto flex gap-2 items-center"
          variant="secondary"
          asChild
        >
          <Link href="/products">
            <span>Browse</span>
          </Link>
        </Button>
      </article>
    </motion.header>
  );
}

// Revalidate (choose a new header) every 24 hours
export const revalidate = 60 * 60 * 24;

export default Header;
