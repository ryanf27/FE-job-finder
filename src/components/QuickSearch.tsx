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

  const handleQuickSearchBtn = (option: string, category: string) => {
    let searchElement: SearchElement;

    if (category === "Job Title") {
      searchElement = { name: "title", value: option };
    } else if (category === "Location") {
      searchElement = { name: "location", value: option };
    } else {
      console.error("Unknown category");
      return;
    }
    onSearchValueClick([searchElement]);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold my-8">Quick Search</h2>

      {categories.map((category, index) => (
        <div key={index} className="flex flex-row mb-4">
          <h3 className="font-medium basis-1/12">{category.title}</h3>
          <ul className="flex flex-wrap ml-4">
            {category.options.map((option, optionIndex) => (
              <li
                key={optionIndex}
                className="mr-4 cursor-pointer text-blue-500"
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
