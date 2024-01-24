import React, { useState } from "react";
import { BsSearch, BsHouseDoor } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

interface SearcProps {
  searchData: (data: { name: string; value: string }[]) => void;
}

interface SearchInput {
  name: string;
  value: string;
}

const SearchBar: React.FC<SearcProps> = ({ searchData }) => {
  const [searchInputs, setSearchInputs] = useState<SearchInput[]>([
    { name: "title", value: "" },
    { name: "company", value: "" },
    { name: "location", value: "" },
  ]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchInputs((prevState) =>
      prevState.map((input) =>
        input.name === name ? { ...input, value } : input
      )
    );
  };

  const clearInputJob = () => {
    setSearchInputs((prevState: SearchInput[]) =>
      prevState.map((input: SearchInput) =>
        input.name === "title" ? { ...input, value: "" } : input
      )
    );
  };

  const clearInputCompany = () => {
    setSearchInputs((prevState: SearchInput[]) =>
      prevState.map((input: SearchInput) =>
        input.name === "company" ? { ...input, value: "" } : input
      )
    );
  };

  const clearInputLocation = () => {
    setSearchInputs((prevState: SearchInput[]) =>
      prevState.map((input: SearchInput) =>
        input.name === "location" ? { ...input, value: "" } : input
      )
    );
  };

  const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    try {
      const filteredData = searchInputs.filter(
        (input) => input.value.trim().length > 0
      );

      if (filteredData.length === 0) {
        alert("Please enter input data");
        return;
      }
      searchData(filteredData);
    } catch (error) {
      console.error(`error occured ${e}`);
    }
  };

  return (
    <div className="flex items-center justify-center mt-20 bg-blue-100 w-4/5 rounded-lg shadow-md">
      <form action="" className="flex flex-row w-full p-12 ">
        {/* job input field*/}
        <div className="w-1/3 flex items-center space-x-1 mr-4">
          <BsSearch className="w-7 h-7 text-gray-400" />
          <input
            name="title"
            type="text"
            className="w-full rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Job..."
            value={searchInputs[0].value}
            onChange={onChangeHandler}
          />
          <AiOutlineCloseCircle
            onClick={clearInputJob}
            className="w-7 h-7 text-gray-400"
          />
        </div>
        {/* company input field*/}
        <div className="w-1/3 flex items-center space-x-1 mr-4">
          <BsHouseDoor className="w-7 h-7 text-gray-400" />
          <input
            name="company"
            type="text"
            className="w-full rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search By Company..."
            value={searchInputs[1].value}
            onChange={onChangeHandler}
          />
          <AiOutlineCloseCircle
            onClick={clearInputCompany}
            className="w-7 h-7 text-gray-400 hover:text-blue-500"
          />
        </div>
        {/* location */}
        <div className="w-1/3 flex items-center space-x-1 mr-4">
          <CiLocationOn className="w-7 h-7 text-gray-400" />
          <input
            name="location"
            type="text"
            className="w-full rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search By Location..."
            value={searchInputs[2].value}
            onChange={onChangeHandler}
          />
          <AiOutlineCloseCircle
            onClick={clearInputLocation}
            className="w-7 h-7 text-gray-400 hover:text-blue-500"
          />
        </div>

        <button
          onClick={(e) => {
            onSubmitHandler(e);
          }}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
