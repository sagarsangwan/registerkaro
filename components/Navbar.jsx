"use client";
import { Facebook, Twitter, Instagram, Phone, Mail } from "lucide-react";

// export default function Navbar() {
//   return (
//     <header className="w-full">
//       {/* Top Bar */}

//       {/* Main Navbar */}
//       <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
//         {/* Logo */}

//         {/* Menu Items */}
//         <div className="hidden md:flex items-center space-x-6">
//           <a href="#" className="hover:text-[#1d4a7d]">Home</a>
//           <div className="relative group">
//             <a href="#" className="hover:text-[#1d4a7d] flex items-center">
//               Our Services <span className="ml-1">▼</span>
//             </a>
//             {/* Dropdown (Optional) */}
//             <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md hidden group-hover:block">
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 1</a>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 2</a>
//             </div>
//           </div>
//           <a href="#" className="hover:text-[#1d4a7d]">Blog</a>
//           <a href="#" className="hover:text-[#1d4a7d]">Contact Us</a>
//           <a href="#" className="hover:text-[#1d4a7d]">About Us</a>
//           <Search size={18} className="cursor-pointer" />
//         </div>

//         {/* CTA Button */}
//         <button className="bg-[#f3921f] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#d17a1c]">
//           Talk An Expert
//         </button>
//       </nav>
//     </header>
//   );
// }

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react"; // Import MenuIcon directly

export default function Navbar() {
  const siteName = "<Sagar/>"; // Combine name parts for easier rendering

  const menus = [
    // { title: "Blogs", path: "#" },
    { title: "About ", path: "#" },
    { title: "Contact ", path: "#" },
    { title: "Projects", path: "#" },
  ];

  return (
    <header className="shadow w-full">
      <div className="bg-[#1d4a7d] text-white text-sm py-2 px-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Mail size={16} />

            <a href="mailto:www.registerkaro.in" className="hover:underline">
              www.registerkaro.in
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <Phone size={16} />
            <a href="tel:+918447746183" className="hover:underline">
              +91 8447746183
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Facebook size={16} className="cursor-pointer" />
          <Twitter size={16} className="cursor-pointer" />
          <Instagram size={16} className="cursor-pointer" />
        </div>
      </div>
      <div className=" mx-auto flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#f3921f]">Register</span>
          <span className="text-xl font-bold text-[#1d4a7d]">Karo</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6">
            {" "}
            {/* Simplified ul classes */}
            {menus.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-400 hover:text-green-500 transition"
              >
                {" "}
                {/* Added transition for hover effect */}
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <button className="bg-[#f3921f] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#d17a1c]">
            // Talk An Expert //{" "}
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <ul className="flex flex-col space-y-4">
                {" "}
                {/* Vertical menu in mobile */}
                {menus.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-400 hover:text-green-500 transition py-2"
                  >
                    {" "}
                    {/* Added padding */}
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// No need for separate Icon components if you're using lucide-react
