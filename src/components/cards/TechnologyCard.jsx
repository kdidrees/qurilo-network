import React from "react";
import icon from "../../assets/api-development/icons/api_implementation.png";
import { FaCheckCircle } from "react-icons/fa";

const TechnologyCard = ({ tech }) => {
  return (
    <div className=" h-full flex flex-col gap-5 py-10 border-b-[1px] border-blue bg-[#f1f1f1] px-4">
      <div className="flex items-center gap-5">
        <img
          src={icon}
          alt="image"
          // className="h-10 w-10"
          width={50}
          height={50}
        />

        <h3 className=" text-xl text-black font-medium font-sans">
          {tech.heading}
        </h3>
      </div>
      <div className="relative w-full h-[2px] bg-blue rounded-md">
        <div className="absolute top-[-4px] left-10 w-3 h-3 bg-blue rounded-full"></div>
      </div>

      <div className=" block">
        {tech.tech?.map((techUsed, i) => (
          <ul className="text-base mt-5 flex  gap-4 text-gray-500 ">
            <li
              key={i}
              className="flex items-center gap-2  text-base text-desc text-body-color font-sans"
            >
              <FaCheckCircle className="h-4 w-4  text-gray-400" />
              {techUsed}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default TechnologyCard;
