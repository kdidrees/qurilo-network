import React from "react";
import icon from "../../assets/api-development/icons/api_implementation.png";
import { FaCheckCircle } from "react-icons/fa";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";

const TechnologyCard = ({ tech }) => {
  return (
    <div className=" h-full flex flex-col gap-5 py-6 border-b-[1px]  bg-[#f1f1f1] px-4">
      <div className="flex items-center gap-5">
        <img
          src={tech.icon}
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

      <div className=" grid grid-cols-1   lg:grid-cols-2 ">
        {tech.tech?.map((techUsed, i) => (
          <ul className="text-base mt-2 flex  gap-4 text-gray-500 ">
            <li
              key={i}
              className="flex items-center gap-2  text-base text-desc text-body-color font-sans"
            >
              <IoIosCheckmark className="h-5 w-5  text-gray-600 bg-gray-300 font-bold rounded-xl" />
              {techUsed}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default TechnologyCard;
