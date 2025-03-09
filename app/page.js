import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import FAQsection from "@/components/FAQsection";
import Footer from "@/components/Footer";
import HappyClients from "@/components/HappyClients";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import TestimonialSlider from "@/components/TestimonialSlider";
import VideoIntroduction from "@/components/VideoIntroduction";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <VideoIntroduction />
      <HappyClients />
      <BlogSection />
      <TestimonialSlider />
      <FAQsection />
      <Newsletter />
      <Statistics />
      <Footer />
    </div>
  );
}
