import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import Image from "next/image";
function Newsletter() {
  return (
    <>
      <section className="bg-gradient-to-r from-orange-400 to-blue-900 text-white py-16 px-6 text-center">
        <h3 className="text-sm uppercase mb-2">1% of the industry</h3>
        <h2 className="text-3xl font-bold mb-6">
          Welcome to your new digital reality. Now.
        </h2>
        <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 py-3 px-4 rounded-md text-black"
          />
          <Button className="bg-orange-500 px-6 py-3 font-semibold rounded-md">
            Submit
          </Button>
        </div>
        <div className="flex justify-center gap-4 mt-4 text-sm text-gray-300">
          {[
            "Instant results",
            "User-friendly interface",
            "Personalized customization",
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-1">
              <Check size={16} /> {text}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Newsletter;
