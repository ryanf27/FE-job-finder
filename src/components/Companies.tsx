import React from "react";

// Import logos
import logo1 from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo6.png";
import logo6 from "../assets/logo7.png";
import logo7 from "../assets/logo8.png";

const Companies: React.FC = () => {
  const companies = [
    { name: "Instagram", logo: logo1 },
    { name: "Facebook", logo: logo2 },
    { name: "Apple", logo: logo3 },
    { name: "Microsoft", logo: logo4 },
    { name: "Reebok", logo: logo5 },
    { name: "Adidas", logo: logo6 },
    { name: "Twitter", logo: logo7 },
  ];

  return (
    <div id="Companies" className="container pt-16 w-3/4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-2">Our Trusted Companies</h2>
        <p className="text-gray-500 mb-16">
          We partner with these fine companies to bring you the best services.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {companies.map((company, index) => (
          <div
            key={index}
            className="w-40 h-40 flex justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={company.logo}
              alt={`${company.name} Logo`}
              className="object-contain p-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
