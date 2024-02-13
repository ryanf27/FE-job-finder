import React, { useState } from "react";
import { JobData } from "../pages/Homepages";
import { BiTimeFive } from "react-icons/bi";
import moment from "moment";

interface JobsListProps {
  filteredData: JobData[] | undefined;
}

const JobsList: React.FC<JobsListProps> = ({ filteredData }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  const pageLimit = 3;
  const halfPageRange = Math.floor(pageLimit / 2);
  const totalPages = filteredData
    ? Math.ceil(filteredData.length / itemsPerPage)
    : 0;

  let startPage = Math.max(1, currentPage - halfPageRange);
  let endPage = Math.min(totalPages, currentPage + halfPageRange);

  if (currentPage <= halfPageRange) {
    endPage = startPage + pageLimit - 1;
  }
  if (currentPage + halfPageRange >= totalPages) {
    startPage = totalPages - pageLimit + 1;
  }

  for (let i = startPage; i <= endPage; i++) {
    if (i > 0) pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mb-12">
      {currentItems?.map(
        ({
          id,
          title,
          location,
          description,
          created_at,
          salary,
          company,
          type,
        }) => (
          <div
            key={id}
            className="bg-white w-3/4 mx-auto my-8 p-4 rounded-lg shadow-xl"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">{title}</h1>
              <div className="text-gray-500 flex flex-col">
                <span className="flex items-center mb-2">
                  <BiTimeFive className="mr-1 size-4" />
                  <p className="text-sm">{moment(created_at).fromNow()}</p>
                </span>
                <p className="text-sm text-right">${salary}</p>
              </div>
            </div>
            <h6 className="text-gray-500 mb-3">{location}</h6>
            <p className="text-gray-600">{description}</p>
            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <span className="text-xl font-normal">{company}</span>
                <div className="text-gray-500">{type}</div>
              </div>

              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Apply Now
              </button>
            </div>
          </div>
        )
      )}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => paginate(1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-1 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "bg-blue-500"
          } text-white rounded-md`}
        >
          First
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 mx-1 ${
              currentPage === number ? "bg-blue-600" : "bg-blue-500"
            } text-white rounded-md`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => paginate(totalPages)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-1 ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "bg-blue-500"
          } text-white rounded-md`}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default JobsList;
