import React from "react";
import { ChevronRight } from "lucide-react";

import hero from "../assets/hero.png";
const Header = () => {
  return (
    <div
      className="d-grid min-h-screen w-screen"
      style={{ backgroundImage: "var(--grad)" }}
    >
      <header className="w-full min-h-screen header-content pt-25 cont flex flex-col gap-23">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="md:text-6xl text-4xl font-medium">
            Buy, Sell and Manage Your <br /> Crypto All In One Place.
          </h1>
          <p className="md:text-md text-sm text-primary/60">
            Discover everything you need to navigate the world of crypto with
            ease and confidence. <br /> Analyze market trends, track your
            portfolio, and execute trades seamlessly.
          </p>
          <button className="bg-primary flex items-center gap-2 text-background px-4 py-2 rounded-sm bg-[linear-gradient(to_bottom,_#d3d3d3,_#6e6e6e)] font-medium">
            Get a Demo <ChevronRight />
          </button>
        </div>
        <div className="w-[90%] mx-auto">
          <img src={hero} alt="" className="w-full" />
        </div>
      </header>
    </div>
  );
};

export default Header;
