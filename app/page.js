import About from "@/components/About";
import HappyClients from "@/components/HappyClients";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <HappyClients />
      <Statistics />
      <Newsletter />
    </div>
  );
}
