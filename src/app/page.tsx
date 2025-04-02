import Header from "@/components/home/Header";
import Metrics from "@/components/home/Metrics";
import ProductsSwiper from "@/components/home/ProductsSwiper";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <ProductsSwiper />
      <Metrics />
      <WhyChooseUs />
    </>
  );
}
