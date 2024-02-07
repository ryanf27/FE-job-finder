import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent shadow-md text-black p-4 flex items-center justify-between">
      <strong className="text-2xl font-bold">Job Finder</strong>
      <nav>
        <ul className="flex gap-4 m-0 p-0">
          {["Jobs", "Companies", "About", "Contact", "Login", "Register"].map(
            (item, index) => (
              <li
                key={index}
                className="relative cursor-pointer hover:text-blue-50 text-lg"
              >
                <a href="#" className="hover:text-blue-50">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
