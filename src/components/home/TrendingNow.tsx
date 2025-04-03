import React from "react";
import AnimateIntoView from "../reusable/AnimateIntoView";
import { Product } from "./ProductsSwiper";
import ProductCard from "./pieces/ProductCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function TrendingNow() {
  const products: Product[] = [
    {
      name: "Real Me Bluetooth Headphones",
      imageUrl: "/products/realme-bluetooth-headphones.jpg",
      stock: 10,
      price: 15,
      category: "device",
      description:
        "A pair of wireless headphones with a microphone and LED indicators",
      hot: true,
    },
    {
      name: "XBass ShortWave Radio",
      imageUrl: "/products/xbass-shortwave-radio.jpg",
      stock: 12,
      price: 20,
      category: "device",
      description: "A shortwave radio with bass boost, FM, and AM radio",
    },
    {
      name: "GD plus solar light",
      imageUrl: "/products/gd-plus-solar-light.jpg",
      stock: 32,
      price: 20,
      category: "device",
      description: "A solar light with a USB port and a torchlight",
    },
    {
      name: "Sy 158 speaker with side light and bulb",
      imageUrl: "/products/sy-158-speaker-with-side-light-and-bulb.jpg",
      stock: 8,
      price: 20,
      category: "device",
      description: "A Bluetooth speaker with a light bulb and a side light",
    },
    {
      name: "1.5 VGA cable",
      imageUrl: "/products/onepointfive-vga-cable.jpg",
      stock: 102,
      price: 2,
      category: "add-on",
      description: "A 1.5 meter long VGA cable with a 15 pin connector",
    },
    {
      name: "4 in 1 set quality smartwatch",
      imageUrl: "/products/4-in-1-set-quality-smartwatch.jpg",
      stock: 17,
      price: 25,
      category: "device",
      description:
        "A 4-in-1 smartwatch with a fitness tracker, heart rate monitor, and GPS",
      hot: true,
    },
    {
      name: "Iphone 8g battery",
      imageUrl: "/products/iphone-8g-battery.jpg",
      stock: 8,
      price: 10,
      category: "add-on",
      description: "A replacement battery for iPhone 8G",
    },
    {
      name: "C to C head Samsung 2 pin",
      imageUrl: "/products/c-to-c-head-samsung-2-pin.jpg",
      stock: 20,
      price: 4,
      category: "add-on",
      description: "A C-to-C head Samsung 2 pin cable",
    },
    {
      name: "38 ci original itel battery",
      imageUrl: "/products/38-ci-original-itel-battery.jpg",
      stock: 27,
      price: 5,
      category: "add-on",
      description: "A 38ci original Itel battery",
    },
    {
      name: "Itel 5cb Imitation",
      imageUrl: "/products/itel-5cb-imitation.jpg",
      stock: 8,
      price: 0.5,
      category: "add-on",
      description: "An imitation of the Itel 5cb device",
    },
    {
      name: "HDMI cables 1.5metres ",
      imageUrl: "/products/HDMI-cabled-1.5-metres.jpg",
      stock: 28,
      price: 1,
      category: "add-on",
      description: "A 1.5 meter long HDMI cable",
      hot: true,
    },
  ];

  return (
    <AnimateIntoView>
      <section className="section px-4 md:px-20 flex flex-col justify-center items-center gap-8 md:gap-16">
        {/* Heading and subheading */}
        <article className="flex flex-col items-center justify-center text-center">
          <h3 className="heading">Trending Now at Accessories World</h3>
          <p className="subheading">
            These are the accessories everyone’s talking about! Grab yours
            before they’re gone!
          </p>
        </article>

        {/* Actual items */}
        <article className="flex flex-col gap-4 md:gap-8 w-full justify-center items-center">
          <article className="grid md:grid-cols-3 sm:grid-cols-2 justify-center items-center gap-20 w-full">
            {products.map((product: Product) => (
              <ProductCard key={product.description} product={product} />
            ))}
          </article>

          {/* View all products CTA */}
          <Button
            className="w-fit flex gap-2 items-center self-end"
            variant="secondary"
          >
            <Link
              className="w-fit flex gap-2 items-center self-end"
              href="/products"
            >
              <span>All Products</span>
              <ArrowRight
                className="animate-caret-blink"
                strokeWidth={1.5}
                size={24}
              />
            </Link>
          </Button>
        </article>
      </section>
    </AnimateIntoView>
  );
}

export default TrendingNow;
