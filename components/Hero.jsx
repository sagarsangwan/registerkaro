import Image from "next/image";
import Link from "next/link";
import { Star, Search, ArrowRight } from "lucide-react";
import hero from "../public/images/hero.svg";
import oracle from "../public/images/oracle.svg";

import { Input } from "./ui/input";

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 pt-4 md:pt-8">
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

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Your trusted partner
            <br />
            for compliance business needs
          </h1>

          <div className="w-12 h-1 bg-red-500 mb-6"></div>

          <p className="text-gray-700 mb-6 max-w-lg">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various{" "}
            <span className="text-gray-900 font-medium">
              registrations, tax filings
            </span>
            , and other{" "}
            <span className="text-gray-900 font-medium">legal matters</span>.
          </p>

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

        {/* Right Section (Image + Buttons) */}
        <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex justify-center">
          <div className="relative h-[400px] md:h-[500px] w-full max-w-md">
            {/* Buttons on Image */}
            <div className="absolute top-6 right-2 md:top-12 md:right-6 flex flex-col gap-2 md:gap-4 z-10">
              <button className="bg-white py-2 px-4 rounded-md shadow-md text-sm font-medium text-center">
                Annual Compliance
              </button>
              <button className="bg-white py-2 px-4 rounded-md shadow-md text-sm font-medium text-center">
                Payroll Services
              </button>
              <button className="bg-white py-2 px-4 rounded-md shadow-md text-sm font-medium text-center">
                Company Formation
              </button>
              <button className="bg-white py-2 px-4 rounded-md shadow-md text-sm font-medium text-center">
                Annual Compliance
              </button>
            </div>

            {/* Image */}
            <Image
              src={hero}
              width={600}
              height={400}
              alt="Business compliance illustration"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div>
        <p className="justify-center text-center sm:text-xl md:text-2xl font-bold">
          Trusted By Over 100+ Startups and freelance business
        </p>
        <div className="overflow-x-auto flex-nowrap flex gap-4 py-10 justify-center">
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
