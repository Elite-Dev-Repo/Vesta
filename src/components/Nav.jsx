import React from "react";
import vestalogo from "../assets/vestalogo.png";
import { Menu } from "lucide-react"; // Import hamburger icon
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Nav = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "How it Works", href: "#howitworks" },

    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Faqs", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-[50] w-full border-b border-primary/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={vestalogo} alt="Vesta Logo" className="w-32 md:w-35" />
        </a>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="capitalize text-primary/60 text-sm font-light hover:text-primary transition-all duration-300 cursor-pointer"
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-primary text-background px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Sign Up
          </button>

          {/* Mobile Menu Drawer */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-primary">
                  <Menu size={28} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-background border-primary/10 w-[300px]"
              >
                <SheetHeader className="text-left mb-8">
                  <SheetTitle>
                    <img src={vestalogo} alt="Vesta Logo" className="w-24" />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 px-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-light text-primary/70 hover:text-primary border-b border-primary/5 pb-2"
                    >
                      {item.name}
                    </a>
                  ))}
                  <button className="bg-primary text-background w-full py-3 rounded-md mt-4">
                    Sign Up
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
