import React from "react";
import servicesImage from "../public/images/servicesImage.svg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
const servicesList = [
  {
    title: "Annual Compliance Services",
    description: "Stay compliant with annual regulatory requirements",
    icon: "📅",
  },
  {
    title: "Payroll Services",
    description: "Efficient and accurate payroll management solutions",
    icon: "💸",
  },
  {
    title: "Bookkeeping Services",
    description: "Professional bookkeeping to keep your finances in order",
    icon: "📚",
  },

  {
    title: "Financial Compliance",
    description: "We help businesses meet financial regulations and standards",
    icon: "💰",
  },
  {
    title: "Corporate Secretarial Services",
    description:
      "Expert assistance with corporate governance and documentation",
    icon: "📝",
  },
  {
    title: "Bookkeeping Services",
    description: "Professional bookkeeping to keep your finances in order",
    icon: "📊",
  },
];
function Services() {
  return (
    <section className="py-16 px-3">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {servicesList.map((service, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow text-center"
            >
              <CardHeader>
                <div className="flex justify-center">
                  <Image src={servicesImage} alt="services" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link
                  href="#"
                  className="text-orange-500 hover:text-orange-600 flex items-center gap-2 text-sm font-medium"
                >
                  Learn More <ChevronRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-blue-800 hover:bg-blue-900">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Services;
