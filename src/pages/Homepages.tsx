import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import JobsList from "../components/JobsList";
import data from "../data";

interface HomeProps {}

export interface DataItem {
  [key: string]: string | number;
}

interface SearchElement {
  name: keyof DataItem;
  value: string;
}

const Homepages: React.FC<HomeProps> = () => {
  const [filteredData, setFilteredData] = useState<DataItem[] | undefined>(
    data
  );

  const searchData = (inputData: SearchElement[]): void => {
    const newData: DataItem[] = data.filter((d: DataItem) => {
      return inputData.every((el: SearchElement) => {
        return d[el.name]
          .toString()
          .toLowerCase()
          .includes(el.value.toLowerCase());
      });
    });
    setFilteredData(newData);
  };

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <SearchBar searchData={searchData} />
      <JobsList filteredData={filteredData} />
    </div>
  );
};

export default Homepages;
