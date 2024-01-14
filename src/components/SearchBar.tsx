import React, { useState } from "react";
import { BsSearch, BsHouseDoor } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

interface SearcProps {
  searchData: (data: { name: string; value: string }[]) => void;
}

const SearchBar: React.FC<SearcProps> = ({ searchData }) => {
  const [searchInputs, setSearchInputs] = useState<
    { name: string; value: string }[]
  >([
    { name: "title", value: "" },
    { name: "company", value: "" },
    { name: "location", value: "" },
  ]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchInputs((prevState) => {
      const updateState = prevState.map((input) => {
        if ((input.name = name)) {
          input.value = value;
        }
        return input;
      });
      return updateState;
    });
  };

  const clearInputJob = () => {
    setSearchInputs((prevState) => [
      ...prevState.slice(0, 1),
      { ...prevState[0], value: "" },
      ...prevState.slice(1),
    ]);
  };

  const clearInputCompany = () => {
    setSearchInputs((prevState) => [
      ...prevState.slice(0, 2),
      { ...prevState[1], value: "" },
      ...prevState.slice(2),
    ]);
  };

  const clearInputLocation = () => {
    setSearchInputs((prevState) => [
      ...prevState.slice(0, 3),
      { ...prevState[2], value: "" },
      ...prevState.slice(3),
    ]);
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
    <div className="flex items-center justify-center mt-20 bg-gray-200 w-4/5">
      <form
        action=""
        className="flex flex-col w-full max-w-md px-4 py-4 bg-white rounded-lg shadow-md"
      >
        <div className="w-1/3 flex items-center space-x-2">
          <BsSearch className="w-4 h-4 text-gray-400" />
          {/* job */}
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
            className="w-4 h-4 text-gray-400"
          />
        </div>
        {/* company */}
        <div className="w-1/3 flex items-center space-x-2">
          <BsHouseDoor className="w-4 h-4 text-gray-400" />
          <input
            name="company"
            type="text"
            className="inputField"
            placeholder="Search By Company..."
            value={searchInputs[1].value}
            onChange={onChangeHandler}
          />
          <AiOutlineCloseCircle
            onClick={clearInputCompany}
            className="w-4 h-4 text-gray-400 hover:text-blue-500"
          />
        </div>
        {/* location */}
        <div className="w-1/3 flex items-center space-x-2">
          <CiLocationOn className="w-4 h-4 text-gray-400" />
          <input
            name="location"
            type="text"
            className="inputField"
            placeholder="Search By Location..."
            value={searchInputs[2].value}
            onChange={onChangeHandler}
          />
          <AiOutlineCloseCircle
            onClick={clearInputLocation}
            className="w-4 h-4 text-gray-400 hover:text-blue-500"
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
