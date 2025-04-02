"use client";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

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
  });

  return (
    <header className="min-h-screen w-full flex flex-col justify-center items-center mx-auto">
      <Badge
        className="px-4 py-2 flex items-center gap-4 bg-purple-500 text-white rounded-full"
        variant="outline"
      >
        <span>Say goodbye to mystery cables and earphones that ghost you</span>
      </Badge>
      <h2>Header</h2>
    </header>
  );
}

export default Header;
