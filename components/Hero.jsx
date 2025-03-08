import Image from "next/image";
import Link from "next/link";
import { Star, Search, ArrowRight } from "lucide-react";
import hero from "../public/images/hero.svg";
import oracle from "../public/images/oracle.svg";

import { Input } from "./ui/input";
export default function Hero() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] relative overflow-hidden">
      {/* Right side menu buttons */}
      <div className="absolute right-6 top-32 z-10 flex flex-col gap-4 md:gap-6 max-w-[200px]">
        <button className="bg-white py-2 px-4 rounded-md shadow-sm text-sm font-medium text-center">
          Annual Compliance
        </button>
        <button className="bg-white py-2 px-4 rounded-md shadow-sm text-sm font-medium text-center">
          Payroll Services
        </button>
        <button className="bg-white py-2 px-4 rounded-md shadow-sm text-sm font-medium text-center">
          Company Formation
        </button>
        <button className="bg-white py-2 px-4 rounded-md shadow-sm text-sm font-medium text-center">
          Annual Compliance
        </button>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 pt-4 md:pt-8">
          {/* Google Rating */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm font-medium text-gray-700">
              Google Rating
            </span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-[#FFC107] text-[#FFC107]"
                />
              ))}
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Your trusted partner
            <br />
            for compliance business needs
          </h1>

          {/* Red line */}
          <div className="w-12 h-1 bg-red-500 mb-6"></div>

          {/* Description */}
          <p className="text-gray-700 mb-6 max-w-lg">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various{" "}
            <span className="text-gray-900 font-medium">
              registrations, tax filings
            </span>
            , and other{" "}
            <span className="text-gray-900 font-medium">legal matters</span>.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src={hero} alt="Rating icon" className="opacity-70" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#C2703D]">4.5+</div>
                <div className="text-xs text-gray-600">Customer Rating</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src={hero} alt="Clients icon" className="opacity-70" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#C2703D]">20,000+</div>
                <div className="text-xs text-gray-600">Clients</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src={hero} alt="Financial icon" className="opacity-70" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#C2703D]">99.8%</div>
                <div className="text-xs text-gray-600">Financial Stability</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="bg-[#1E3A5F] text-white px-6 py-3 rounded-md font-medium hover:bg-[#15293f] transition-colors"
            >
              Talk An Expert
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-md font-medium text-gray-800 hover:bg-gray-100 transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-[#E74C3C] flex items-center justify-center text-white">
                <ArrowRight className="w-3 h-3" />
              </div>
              See how it works
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
          {/* Search Bar */}
          <div className="absolute top-0 right-0 md:right-12 z-10 flex items-center">
            <div className="relative">
              <Input
                type="text"
                className="bg-[#E6F7F9] h-10 pl-4 pr-10 rounded-md border-0 focus:ring-2 focus:ring-[#4FC3D8] w-48 md:w-64"
                placeholder="Search..."
              />
              <button className="absolute right-0 top-0 h-full aspect-square flex items-center justify-center bg-[#E74C3C] rounded-r-md">
                <Search className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Main Illustration */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Person at desk */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
              <Image
                src={hero}
                width={600}
                height={400}
                alt="Business compliance illustration"
                className="object-contain"
              />
            </div>

            {/* Target/Bullseye */}
            <div className="absolute right-0 bottom-1/4 hidden md:block">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border-4 border-[#E74C3C] opacity-20"></div>
                <div className="absolute inset-[20%] rounded-full border-4 border-[#E74C3C] opacity-40"></div>
                <div className="absolute inset-[40%] rounded-full bg-[#E74C3C]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="justify-center text-center sm:text-xl md:text-2xl  font-bold">
          Trusted By Over 100+ Startups and freelance business
        </p>
        <div
          className="overflow-x-auto flex-nowrap flex gap-4 py-10" // Added scroll and nowrap
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="flex-shrink-0 w-32" key={item}>
              <Image src={oracle} alt="companies" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
