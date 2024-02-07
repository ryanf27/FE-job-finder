import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-around items-start p-12 text-gray-700 w-11/12 mx-auto">
      <div className="flex flex-col space-y-4 w-1/5">
        <div className="font-bold text-xl">
          <h1>
            <strong>Job</strong>Finder
          </h1>
        </div>
        <p className="text-sm opacity-70">
          We always help job seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>

      <div className="space-y-2 w-1/5">
        <span className="block font-bold text-base">Company</span>
        <ul className="space-y-2">
          <li>About Us</li>
          <li>Features</li>
          <li>News</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="space-y-2 w-1/5">
        <span className="block font-bold text-base">Resource</span>
        <ul className="space-y-2">
          <li>Account</li>
          <li>Support Center</li>
          <li>Feedback</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="space-y-2 w-1/5">
        <span className="block font-bold text-base">Support</span>
        <ul className="space-y-2">
          <li>Events</li>
          <li>Promo</li>
          <li>Req Demo</li>
          <li>Careers</li>
        </ul>
      </div>

      <div className="space-y-2 w-1/5">
        <span className="block font-bold text-base">Contact Info</span>
        <small className="block opacity-70">appfinderinfo@email.com</small>
        <div className="flex items-center space-x-4 mt-2">
          <AiFillInstagram className="text-xl cursor-pointer" />
          <AiFillFacebook className="text-xl cursor-pointer" />
          <AiFillTwitterCircle className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
