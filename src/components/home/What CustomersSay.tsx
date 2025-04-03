import React from "react";
import AnimateIntoView from "../reusable/AnimateIntoView";
import { ShoppingBasket, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";

type Testimonial = {
  person: {
    name: string;
    image: string;
  };
  product: string;
  testimonial: string;
  stars: number;
};

function WhatCustomersSay() {
  const testimonials: Testimonial[] = [
    {
      person: {
        name: "Tawananyasha Masocha",
        image: "/images/people/tawananyasha",
      },
      product: "AirPods",
      testimonial:
        "Accessories World are the best in town, I bought their Airpods 6 months ago but they still work as though they were new. Highly recommended !",
      stars: 5,
    },
    {
      person: {
        name: "Lilian Chitongo",
        image: "/images/people/lilian",
      },
      product: "Edifier TWS Earphones",
      testimonial:
        "The sound quality on the Edifier TWS earphones I bought is amazing, I love how they fit in my ear and the battery life is great. Good job guys!",
      stars: 5,
    },
    {
      person: {
        name: "Kudakwashe Chikonye",
        image: "/images/people/kudakwashe",
      },
      product: "Power Bank",
      testimonial:
        "I was skeptical about the quality of the power bank I bought from Accessories World but it has exceeded my expectations. It charges my devices fast and the design is sleek. I'm coming back for more!",
      stars: 5,
    },
    {
      person: {
        name: "Shingirai Moyo",
        image: "/images/people/shingirai",
      },
      product: "Realme Bluetooth Speaker",
      testimonial:
        "The Realme Bluetooth speaker I bought is a beast! It's so portable and the sound is crystal clear. I recommend Accessories World to anyone looking for quality products. ",
      stars: 5,
    },
    {
      person: {
        name: "Siphokazi Mtengwane",
        image: "/images/people/siphokazi",
      },
      product: "Xiaomi Mi Band 4",
      testimonial:
        "I was hesitant about buying the Xiaomi Mi band 4 from Accessories World but it's been a game-changer for my fitness routine. The design is sleek and the battery life is great. I'm glad I took the leap!",
      stars: 5,
    },
  ];

  return (
    <AnimateIntoView>
      <section className="section px-4 md:px-16 grid md:grid-cols-2 md:justify-between gap-4 items-center">
        <article className="flex flex-col gap-4 ">
          <article className="flex flex-col gap-2 justify-center items-center text-center">
            <h4 className="heading">
              What Our Customers Say About Accessories World
            </h4>
            <p className="subheading">
              We don’t just talk big—our customers do it for us! Here’s what
              people are saying about our accessories.
            </p>
          </article>
          <article className="flex gap-4 items-center justify-center text-center">
            <p>Ready to join us ?</p>
            <Button asChild variant="secondary">
              <Link href="/products" className="flex gap-2 items-center">
                <ShoppingBasket size={24} />
                <span>Shop now</span>
              </Link>
            </Button>
          </article>
        </article>

        <article className="flex flex-col gap-8 items-center max-h-[400px] overflow-y-auto w-full">
          {testimonials.map((testimonial: Testimonial) => (
            <article
              key={testimonial.testimonial}
              className="rounded-lg bg-slate-100 p-4 md:p-8 flex flex-col gap-4 w-full"
            >
              {/* Stars */}
              <article className="flex gap-2 items-center">
                {[...Array(testimonial.stars)].map((star, index) => (
                  <span key={index} className=" text-xl">
                    <Star strokeWidth={1} size={18} fill="black" />
                  </span>
                ))}
              </article>

              {/* Testimonial content */}
              <p>"{testimonial.testimonial}"</p>

              {/* User profile */}
              <article className="flex gap-2 items-center">
                {/* User Avatar */}
                <Avatar className="w-12 h-12 border-2 border-red-400">
                  <AvatarFallback>
                    {testimonial.person.name.charAt(0)}
                  </AvatarFallback>
                  <AvatarImage src={testimonial.person.image} />
                </Avatar>

                {/* User metadata */}
                <article className="flex flex-col">
                  <h3 className="font-semibold text-lg">
                    {testimonial.person.name}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {testimonial.product}
                  </span>
                </article>
              </article>
            </article>
          ))}
        </article>
      </section>
    </AnimateIntoView>
  );
}

export default WhatCustomersSay;
