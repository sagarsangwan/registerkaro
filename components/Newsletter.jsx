import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Check } from "lucide-react";
function Newsletter() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#0b3a69] to-[#06315a] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Manage Your Services by your <br /> Mobile Phone
          </h2>
          <p className="text-gray-300 mb-6">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button className="bg-white text-black px-6 py-3 font-medium rounded-md flex items-center gap-2">
              <Image src="/apple.svg" alt="App Store" width={20} height={20} />
              Get it on <span className="font-bold">App Store</span>
            </Button>
            <Button className="bg-white text-black px-6 py-3 font-medium rounded-md flex items-center gap-2">
              <Image
                src="/google-play.svg"
                alt="Google Play"
                width={20}
                height={20}
              />
              Get it on <span className="font-bold">Google Play</span>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image src="/phones.png" alt="Mobile App" width={400} height={400} />
        </div>
      </section>
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
