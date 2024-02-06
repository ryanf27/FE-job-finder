import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import JobsList from "../components/JobsList";
import data from "../data";
import QuickSearch from "../components/QuickSearch";

interface HomeProps {}

export interface JobData {
  [key: string]: string | number;
}

interface SearchElement {
  name: keyof JobData;
  value: string;
}

const Homepages: React.FC<HomeProps> = () => {
  const [filteredData, setFilteredData] = useState<JobData[] | undefined>(data);

  const handleSearchFilters = (inputData: SearchElement[]): void => {
    const newData: JobData[] = data.filter((d: JobData) => {
      return inputData.every((el: SearchElement) => {
        return d[el.name]
          .toString()
          .toLowerCase()
          .includes(el.value.toLowerCase());
      });
    });
    setFilteredData(newData);
  };

  const handleQuickSearchClick = (searchValues: SearchElement[]): void => {
    const newData: JobData[] = data.filter((d: JobData) =>
      searchValues.every((searchValue) =>
        d[searchValue.name]
          .toString()
          .toLowerCase()
          .includes(searchValue.value.toLowerCase())
      )
    );
    setFilteredData(newData);
  };

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <SearchBar handleSearchFilters={handleSearchFilters} />
      <JobsList filteredData={filteredData} />
      <QuickSearch onSearchValueClick={handleQuickSearchClick} />
    </div>
  );
};

export default Homepages;
