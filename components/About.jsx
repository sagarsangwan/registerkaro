import React from "react";
import { Button } from "./ui/button";
import about from "../public/images/about.svg";
import Image from "next/image";
function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            About Register Karo
          </h2>
          <p className="text-gray-600 mb-6">
            Register Karo is a leading provider of business compliance and
            registration services in India. With our team of experienced
            professionals, we help businesses navigate complex regulatory
            requirements and ensure full compliance with all applicable laws and
            regulations.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to simplify the compliance process for businesses of
            all sizes, from startups to established enterprises. We take pride
            in our commitment to excellence, attention to detail, and customer
            satisfaction.
          </p>
          <Button>Read More</Button>
        </div>
        <div>
          <Image
            src={about}
            alt="Register Karo Team"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
