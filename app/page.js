import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import HappyClients from "@/components/HappyClients";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import TestimonialSlider from "@/components/TestimonialSlider";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <HappyClients />
      <BlogSection />
      <TestimonialSlider />
      <Newsletter />
      <Statistics />
    </div>
  );
}
