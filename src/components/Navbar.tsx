import React, { useState, useEffect } from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 ${
        isScrolled
          ? "bg-sky-50 shadow-md text-black transition-colors duration-300"
          : "bg-transparent text-black"
      } p-4 flex items-center justify-around align-middle`}
    >
      <strong className="text-2xl font-bold hover:text-blue-500">
        Job Finder
      </strong>
      <nav>
        <ul className="flex gap-4 m-0 p-0">
          {["Jobs", "Companies", "About", "Contact"].map((item, index) => (
            <li key={index} className="relative cursor-pointer text-lg">
              <a
                href={`#${item}`}
                className={`${
                  isScrolled ? "hover:text-blue-500" : "hover:text-white"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative">
        <button className="bg-blue-50 py-1 px-3 text-lg hover:bg-blue-100  transition-colors duration-300 rounded-full mr-2">
          Login
        </button>
        <button className="bg-blue-500 py-1 px-3 text-lg hover:bg-blue-700 text-white transition-colors duration-300 rounded-full">
          Register
        </button>
      </div>
    </header>
  );
};

export default Navbar;
