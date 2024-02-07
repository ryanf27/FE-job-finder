import React from "react";
import { RiLightbulbLine } from "react-icons/ri";

const ValueSection: React.FC = () => {
  return (
    <div className="text-start py-12 px-10">
      <h1 className="text-3xl  font-bold mb-8">Our Values</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {values.map((value, index) => (
          <div
            key={index}
            className="valueCard bg-white shadow-md rounded-lg p-6"
          >
            <div className="valueIcon text-4xl text-indigo-500 mb-4">
              <RiLightbulbLine />
            </div>
            <h2 className="valueTitle text-xl font-semibold mb-2">
              {value.title}
            </h2>
            <p className="valueDescription text-gray-600">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      <div className="ctaSection mt-12">
        <h1 className="ctaTitle text-3xl font-bold">
          Ready to Take the Next Step?
        </h1>
        <h2 className="ctaSubtitle text-xl mt-4 mb-8">
          Join our team and make an impact!
        </h2>
        <button className="ctaButton bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

// Example values array to keep the component DRY
const values = [
  {
    title: "Simplicity",
    description:
      "We believe in making things beautifully simple, ensuring clarity and ease in everything we do.",
  },
  {
    title: "Innovation",
    description:
      "Embracing innovation is at the core of our approach, driving us to find creative solutions and push boundaries.",
  },
  {
    title: "Collaboration",
    description:
      "Collaboration is key to our success. We foster teamwork, communication, and mutual respect to achieve great outcomes.",
  },
];

export default ValueSection;
