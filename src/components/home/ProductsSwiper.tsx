"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Flame } from "lucide-react";

function ProductsSwiper() {
  const products: {
    name: string;
    imageUrl: string;
    stock: number;
    price: number;
    category: "accessory" | "device" | "both" | "add-on";
    description: string;
    hot?: boolean;
  }[] = [
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
    <Swiper
      spaceBetween={20}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        320: { slidesPerView: 1 }, // Mobile screens
        640: { slidesPerView: 2 }, // Tablets
        768: { slidesPerView: 3 }, // Medium screens
        1024: { slidesPerView: 5 }, // Large screens and up (XL, XXL)
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="justify-center items-center"
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <Card className="flex flex-col items-center justify-center w-fit">
            <CardContent>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className=" object-cover w-full"
              />
              <CardHeader className="px-0 py-4">
                <CardTitle className="text-lg font-semibold">
                  {product.name}
                </CardTitle>
                <CardDescription>{product.description}</CardDescription>
                <article className="w-full items-center justify-between flex">
                  <h4 className="text-2xl font-semibold">${product.price}</h4>
                  {product.hot ? (
                    <Badge
                      variant="default"
                      className="bg-red-600 text-white flex items-center"
                    >
                      <Flame />
                      <span>Hot</span>
                    </Badge>
                  ) : (
                    <Badge variant="secondary">{product.category}</Badge>
                  )}
                </article>
              </CardHeader>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductsSwiper;
