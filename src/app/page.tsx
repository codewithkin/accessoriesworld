import Header from "@/components/home/Header";
import Metrics from "@/components/home/Metrics";
import ProductsSwiper from "@/components/home/ProductsSwiper";
import TrendingNow from "@/components/home/TrendingNow";
import WhatCustomersSay from "@/components/home/What CustomersSay";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <ProductsSwiper />
      <Metrics />
      <WhyChooseUs />
      <WhatCustomersSay />
      <TrendingNow />
    </>
  );
}
