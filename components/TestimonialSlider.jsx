"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import profile from "../public/images/profile.png";
const testimonials = [
  {
    name: "Chris",
    role: "President and CEO, PrintReach, USA",
    image: profile,
    rating: 4.5,
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
  },
  {
    name: "Chris2",
    role: "President and CEO, PrintReach, USA",
    image: profile,
    rating: 4.5,
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
  },
  {
    name: "Chris3",
    role: "President and CEO, PrintReach, USA",
    image: profile,
    rating: 4.5,
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
  },
  // Add more testimonials here
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-blue-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          What people say about us
        </h2>
        <div className="relative flex items-center justify-center">
          <Button
            variant="ghost"
            className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="text-blue-900" />
          </Button>
          <Card className="p-6 max-w-md mx-4 bg-white text-black rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-3xl text-blue-900">“</span>
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i + 1 <= testimonials[index].rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-gray-700">{testimonials[index].feedback}</p>
            <div className="flex items-center mt-4">
              <Image
                src={testimonials[index].image}
                width={40}
                height={40}
                alt={testimonials[index].name}
                className="rounded-full"
              />
              <div className="ml-3">
                <p className="font-bold">{testimonials[index].name}</p>
                <p className="text-sm text-gray-600">
                  {testimonials[index].role}
                </p>
              </div>
            </div>
          </Card>
          <Button
            variant="ghost"
            className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="text-blue-900" />
          </Button>
        </div>
      </div>
    </div>
  );
}
