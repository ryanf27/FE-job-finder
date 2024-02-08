import React from "react";
import { JobData } from "../pages/Homepages";

interface SearchElement {
  name: keyof JobData;
  value: string;
}

interface QuickSearchProps {
  onSearchValueClick: (searchValues: SearchElement[]) => void;
}

const QuickSearch: React.FC<QuickSearchProps> = ({ onSearchValueClick }) => {
  const categories = [
    {
      title: "Job Title",
      options: ["Web Developer", "Data Science", "Design"],
    },
    {
      title: "Location",
      options: ["London", "New York", "Jakarta", "Tokyo"],
    },
  ];

  const handleQuickSearchBtn = (value: string, category: string) => {
    const searchElement: SearchElement = {
      name: category === "Job Title" ? "title" : "location",
      value,
    };
    onSearchValueClick([searchElement]);
  };

  return (
    <div className="container w-3/4 p-2">
      <h2 className="text-3xl font-semibold my-4">Popular Job Categories</h2>
      {categories.map((category, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-medium text-lg mb-4 text-blue-500">
            {category.title}
          </h3>
          <ul className="flex flex-wrap">
            {category.options.map((option, optionIndex) => (
              <li
                key={optionIndex}
                className="mr-4 mb-2 cursor-pointer text-gray-700 hover:text-blue-50 border border-blue-500 hover:bg-blue-500  rounded-full px-4 py-1 transition-colors duration-300"
                onClick={() => handleQuickSearchBtn(option, category.title)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuickSearch;
