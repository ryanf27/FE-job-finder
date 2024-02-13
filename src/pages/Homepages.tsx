import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import JobsList from "../components/JobsList";
// import data from "../data";
import QuickSearch from "../components/QuickSearch";
import ValueSection from "../components/ValueSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Companies from "../components/Companies";
import { fetchJobs } from "../utility/api";

interface HomeProps {}

export interface JobData {
  [key: string]: string | number;
}

interface SearchElement {
  name: keyof JobData;
  value: string;
}

const Homepages: React.FC<HomeProps> = () => {
  const [jobs, setJobs] = useState<JobData[]>([]);

  const [filteredData, setFilteredData] = useState<JobData[] | undefined>(
    undefined
  );

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const response = await fetchJobs();
        setJobs(response.data);
        setFilteredData(response.data);
      } catch (err) {
        console.error("failed to ferch jobs:", err);
      }
    };
    loadJobs();
  }, []);

  const handleSearchFilters = (inputData: SearchElement[]): void => {
    const newData: JobData[] = jobs.filter((d: JobData) => {
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
    const newData: JobData[] = jobs.filter((d: JobData) =>
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
    <div className="flex flex-col items-center bg-gray-100 font-sans scroll-smooth">
      <Navbar />
      <HeroSection />
      <SearchBar handleSearchFilters={handleSearchFilters} />
      <JobsList filteredData={filteredData} />
      <QuickSearch onSearchValueClick={handleQuickSearchClick} />
      <Companies />
      <ValueSection />
      <Footer />
    </div>
  );
};

export default Homepages;
