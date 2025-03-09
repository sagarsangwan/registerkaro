import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import iphone from "../public/images/iphone.svg";

function Statistics() {
  return (
    <>
      <section className="bg-white text-center py-16 px-6">
        <h3 className="text-lg text-gray-500 uppercase tracking-widest mb-2">
          Why Register Karo
        </h3>
        <h2 className="text-3xl font-bold mb-8">Some Numbers are important</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-lg font-semibold">
          {[
            { label: "Customers", value: "1M+" },
            { label: "Years of Excellence", value: "12+" },
            { label: "R&D Engineers", value: "41+" },
            { label: "Countries", value: "78+" },
            { label: "Partners", value: "3287+" },
            { label: "Awards Received", value: "41+" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <span className="text-2xl font-bold text-gray-800">
                {item.value}
              </span>
              <p className="text-gray-500 text-sm uppercase mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
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
          <Image src={iphone} alt="aple" />
        </div>
      </section>
    </>
  );
}

export default Statistics;
