import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer
      id="Contact"
      className="container flex flex-col bg-gray-800 text-white py-16 px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-64 mt-12"
    >
      <div className="mb-8 col-span-2 md:col-span-1">
        <h1 className="text-4xl font-bold mb-2">
          <span className="text-blue-500">Job</span>Finder
        </h1>
        <p className="text-gray-400 text-sm">
          We always help job seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>

      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:col-span-4">
        <div className="space-y-2">
          <span className="block text-xl font-semibold">Company</span>
          <ul className="space-y-1">
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer">Features</li>
            <li className="hover:text-blue-400 cursor-pointer">News</li>
            <li className="hover:text-blue-400 cursor-pointer">FAQ</li>
          </ul>
        </div>

        <div className="space-y-2">
          <span className="block text-xl font-semibold">Resource</span>
          <ul className="space-y-1">
            <li className="hover:text-blue-400 cursor-pointer">Account</li>
            <li className="hover:text-blue-400 cursor-pointer">
              Support Center
            </li>
            <li className="hover:text-blue-400 cursor-pointer">Feedback</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div className="space-y-2">
          <span className="block text-xl font-semibold">Support</span>
          <ul className="space-y-1">
            <li className="hover:text-blue-400 cursor-pointer">Events</li>
            <li className="hover:text-blue-400 cursor-pointer">Promo</li>
            <li className="hover:text-blue-400 cursor-pointer">Req Demo</li>
            <li className="hover:text-blue-400 cursor-pointer">Careers</li>
          </ul>
        </div>

        <div className="space-y-2">
          <span className="block text-xl font-semibold">Contact Info</span>
          <p className="text-gray-400 text-sm">jobfinderinfo@email.com</p>
          <div className="flex items-center space-x-4 mt-2 text-xl">
            <AiFillInstagram className="hover:text-blue-400 cursor-pointer" />
            <AiFillFacebook className="hover:text-blue-400 cursor-pointer" />
            <AiFillTwitterCircle className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
