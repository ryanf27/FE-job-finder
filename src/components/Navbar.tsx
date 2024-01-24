import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="container bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <strong className="text-2xl font-bold">Job Finder</strong>
      <nav className="flex space-x-4">
        <a href="#" className="hover:text-blue-500">
          Jobs
        </a>
        <a href="#" className="hover:text-blue-500">
          Companies
        </a>
        <a href="#" className="hover:text-blue-500">
          About
        </a>
        <a href="#" className="hover:text-blue-500">
          Contact
        </a>
        <a href="#" className="hover:text-blue-500">
          Login
        </a>
        <a href="#" className="hover:text-blue-500">
          Register
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
