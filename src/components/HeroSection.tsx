import React from "react";
import imgBackground from "../assets/bgIMG.svg";
import imgBackground2 from "../assets/bgIMG2.png";

interface HeroProps {}

const HeroSection: React.FC<HeroProps> = () => {
  return (
    <div
      className="flex justify-between bg-cover bg-center h-screen w-full"
      style={{ backgroundImage: `url(${imgBackground})` }}
    >
      <div className="relative top-48 text-black text-center px-10 w-2/3">
        <h1 className="tracking-wide text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Your Dream Job Awaits: Welcome to Job Finder
        </h1>
        <p className="text-xl md:text-2xl mb-8 mx-auto max-w-4xl">
          Discover hidden opportunities. Land your dream role. Craft your
          success story with Job Finder.
        </p>
        <button className="bg-blue-800 text-blue-50 font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
          Find Your Perfect Match
        </button>
      </div>
      <div className="relative top-24 right-2 w-1/2 h-min bg-sky-50 rounded-full">
        <img src={imgBackground2} />
      </div>
    </div>
  );
};

export default HeroSection;
