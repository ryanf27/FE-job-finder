import React from "react";
import { DataItem } from "../pages/Homepages";

// react icons
import { BiTimeFive } from "react-icons/bi";

interface JobsListProps {
  filteredData: DataItem[] | undefined;
}

const JobsList: React.FC<JobsListProps> = ({ filteredData }) => {
  return (
    <div
      className="container
     mt-20"
    >
      {filteredData?.map(
        ({ id, image, title, time, location, desc, company }) => (
          <div
            key={id}
            className="bg-white w-3/4 mx-auto my-8 p-4 rounded-lg shadow-xl "
          >
            <div className="flex items-center justify-between ">
              <h1 className="text-2xl font-semibold">{title}</h1>
              <span className="text-gray-500 flex items-center">
                <BiTimeFive className="inline-block mr-1" /> {time}
              </span>
            </div>
            <h6 className="text-gray-500 mb-3">{location}</h6>
            <p className="text-gray-600">{desc}</p>
            <div className="flex justify-between mt-4">
              {typeof image === "string" && (
                <div className="flex items-center ">
                  <img src={image} alt="CompanyLogo" className="w-8 h-8 mr-2" />
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
    </div>
  );
};

export default JobsList;
