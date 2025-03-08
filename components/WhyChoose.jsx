import React from "react";
import { Shield, CheckCircle, SmilePlus, Users } from "lucide-react";

const whyChoose = [
  {
    title: "Experienced Professionals",
    description:
      "Our team consists of experts with years of experience in compliance",
    icon: "👨‍💼",
  },
  {
    title: "Expert MSME Assistance",
    description: "Specialized support for Micro, Small, and Medium Enterprises",
    icon: "🏭",
  },
  {
    title: "Confidentiality & Care",
    description:
      "We ensure complete confidentiality of your business information",
    icon: "🔒",
  },
  {
    title: "No Hidden Fees",
    description: "Transparent pricing with no surprise charges",
    icon: "💯",
  },
];
function WhyChoose() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-6">
          <h3 className="text-orange-500 font-medium uppercase text-sm">
            WHY REGISTERKARO.IN
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
            Why Choose Register Karo
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-red-50 rounded-lg p-6 flex flex-col items-center md:items-start md:flex-row md:gap-4">
            <div className="mb-4 md:mb-0">
              <Shield className="h-10 w-10 text-orange-500" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-2">
                Confidential & Safe
              </h3>
              <p className="text-gray-600">
                All your private information is safe with us
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-green-50 rounded-lg p-6 flex flex-col items-center md:items-start md:flex-row md:gap-4">
            <div className="mb-4 md:mb-0">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-2">No Hidden Fee</h3>
              <p className="text-gray-600">
                Everything is put before you with no hidden charges or
                conditions
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center md:items-start md:flex-row md:gap-4">
            <div className="mb-4 md:mb-0">
              <SmilePlus className="h-10 w-10 text-blue-500" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-2">
                Guaranteed Satisfaction
              </h3>
              <p className="text-gray-600">
                We ensure that you stay 100% satisfied with our offered services
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-red-50 rounded-lg p-6 flex flex-col items-center md:items-start md:flex-row md:gap-4">
            <div className="mb-4 md:mb-0">
              <Users className="h-10 w-10 text-orange-500" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-2">
                Expert CA/CS Assistance
              </h3>
              <p className="text-gray-600">
                Prompt support from our in-house expert professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
