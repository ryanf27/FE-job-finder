import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import data from "./data";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [filteredData, setFilteredData] = useState(data);

  const searchData = (inputData) => {
    const newData = data.filter((d) => {
      return inputData.every((el) => {
        return d[el.name].toLowerCase().includes(el.value.toLowerCase());
      });
    });
    setFilteredData(newData);
  };
  return (
    <div className=" w-full flex flex-col items-center">
      <Navbar />
      <SearchBar searchData={searchData} />
    </div>
  );
};

export default App;
