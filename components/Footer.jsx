import { Apple, Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0A2753] text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <p className="text-gray-300 mb-4">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
          <div className="flex space-x-4">
            <Linkedin />
            <Instagram />
            <Apple />
            <Facebook />
          </div>
        </div>

        {/* Links Sections */}
        <div>
          <h3 className="text-orange-400 font-semibold mb-3">
            START A BUSINESS
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>Features</li>
            <li>Solutions</li>
            <li>Integrations</li>
            <li>Enterprise</li>
          </ul>
        </div>

        <div>
          <h3 className="text-orange-400 font-semibold mb-3">
            GOVERNMENT REGISTRATION
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>Partners</li>
            <li>Community</li>
            <li>Developers</li>
            <li>App</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="text-orange-400 font-semibold mb-3">
            COMPLIANCE & TAX
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>Channels</li>
            <li>Scale</li>
            <li>Watch the Demo</li>
            <li>Our Competition</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center mt-10">
        <button className="bg-orange-400 p-3 rounded-full text-white">⬆</button>
        <p className="text-gray-400 mt-2">
          © 2024 Registerkaro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
