import React, { useState } from "react";
import { JobData } from "../pages/Homepages";
import { BiTimeFive } from "react-icons/bi";

interface JobsListProps {
  filteredData: JobData[] | undefined;
}

const JobsList: React.FC<JobsListProps> = ({ filteredData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = filteredData
    ? Math.ceil(filteredData.length / itemsPerPage)
    : 0;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div id="Jobs" className="container">
      {currentItems?.map(
        ({ id, image, title, time, location, desc, company }) => (
          <div
            key={id}
            className="bg-white w-3/4 mx-auto my-8 p-4 rounded-lg shadow-xl"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">{title}</h1>
              <span className="text-gray-500 flex items-center">
                <BiTimeFive className="inline-block mr-1" /> {time}
              </span>
            </div>
            <h6 className="text-gray-500 mb-3">{location}</h6>
            <p className="text-gray-600">{desc}</p>
            <div className="flex justify-between mt-4">
              {typeof image === "string" && (
                <div className="flex items-center">
                  <img
                    src={image}
                    alt="Company Logo"
                    className="w-8 h-8 mr-2"
                  />
                  <span className="text-xl font-normal">{company}</span>
                </div>
              )}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Apply Now
              </button>
            </div>
          </div>
        )
      )}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 ${
              currentPage === index + 1 ? "bg-blue-600" : "bg-blue-500"
            } text-white rounded-md`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobsList;
