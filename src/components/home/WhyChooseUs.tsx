"use client";
import { JSX } from "react";
import {
  ShieldCheck,
  DollarSign,
  RefreshCw,
  Headphones,
  CheckCircle,
  Phone,
} from "lucide-react";
import AnimateIntoView from "../reusable/AnimateIntoView";

type WhyChooseUsPoint = {
  icon: JSX.Element;
  title: string;
  description: string;
  href: string;
};

const whyChooseUsPoints: WhyChooseUsPoint[] = [
  {
    icon: <ShieldCheck />,
    title: "Strong & Reliable",
    description:
      "No weak cables or cheap earphones—just solid, tested accessories that last. We make sure everything we sell can handle real life.",
    href: "/quality",
  },
  {
    icon: <DollarSign />,
    title: "Affordable Prices",
    description:
      "You don’t have to spend a lot to get great accessories. We keep our prices fair, without compromising on quality.",
    href: "/pricing",
  },
  {
    icon: <RefreshCw />,
    title: "Easy Returns",
    description:
      "Not happy with your purchase? No worries! We make returns simple and stress-free so you can shop with peace of mind.",
    href: "/returns",
  },
  {
    icon: <Headphones />,
    title: "Better Sound, Better Life",
    description:
      "Looking for headphones that actually sound good? Our audio accessories are made for real sound lovers. Enjoy high-quality sound all day.",
    href: "/audio-accessories",
  },
  {
    icon: <CheckCircle />,
    title: "100% Satisfaction Guaranteed",
    description:
      "If you're not happy, neither are we. Accessories World is all about making sure you're satisfied with your purchase.",
    href: "/satisfaction",
  },
  {
    icon: <Phone />,
    title: "24/7 Support",
    description:
      "Got a question or need help? Our support team is always ready to assist you at any time—just reach out and we'll take care of the rest.",
    href: "/support",
  },
];

function WhyChooseUs() {
  return (
    <AnimateIntoView>
      <section className="section">
        <article className="flex flex-col gap-2 items-center text-cenmter">
          <h3 className="text-2xl md:text-4xl font-semibold">
            Because your gadgets deserve the best
          </h3>
          <p className="text-slate-500 text-md md:max-w-3xl text-center">
            At Accessories World, we know good accessories make life easier. A
            strong charging cable, clear-sounding earphones, or a long-lasting
            battery—these small things matter. That’s why we only sell quality
            products at good prices
          </p>
        </article>
      </section>
    </AnimateIntoView>
  );
}

export default WhyChooseUs;
